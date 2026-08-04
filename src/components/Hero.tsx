import React, { useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenCalculator: () => void;
  onOpenQuoteModal: () => void;
}

const TOTAL_FRAMES = 176;
const SCROLL_DURATION_VH = 250;

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenCalculator,
  onOpenQuoteModal
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(1);
  const rafRef = useRef(0);
  const readyRef = useRef(false);

  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const x = (w - img.naturalWidth * scale) / 2;
    const y = (h - img.naturalHeight * scale) / 2;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const idx = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${idx}.jpg`;
      img.onload = img.onerror = () => {
        if (img.complete && img.naturalWidth > 0) {
          loadedCount++;
          if (loadedCount === 1) {
            drawFrame(img);
            readyRef.current = true;
          }
          if (loadedCount === TOTAL_FRAMES) {
            const scrollEvent = new Event('scroll');
            window.dispatchEvent(scrollEvent);
          }
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      cancelAnimationFrame(rafRef.current);
      images.forEach(img => { img.onload = null; img.onerror = null; });
      imagesRef.current = [];
    };
  }, [drawFrame]);

  useEffect(() => {
    let prevFrame = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (!readyRef.current) return;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      const progress = totalScroll > 0
        ? Math.max(0, Math.min(1, -rect.top / totalScroll))
        : 0;

      const frameIndex = Math.round(progress * (TOTAL_FRAMES - 1));
      const frame = Math.min(Math.max(frameIndex, 0), TOTAL_FRAMES - 1);

      if (frame === prevFrame) return;
      prevFrame = frame;

      const img = imagesRef.current[frame];
      if (img && img.complete && img.naturalWidth > 0) {
        currentFrameRef.current = frame + 1;
        drawFrame(img);
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const img = imagesRef.current[currentFrameRef.current - 1];
        if (img && img.complete) drawFrame(img);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [drawFrame]);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height: `${SCROLL_DURATION_VH}vh` }}>
      <div className="sticky top-0 h-screen w-screen max-w-none overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        <div className="absolute inset-0 bg-[#003F82]/60 pointer-events-none z-10" />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="max-w-3xl text-center space-y-5">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
              Strong. Reliable.
              <br />
              Built for Every Need.
            </h1>
            <p className="text-sm sm:text-base font-light text-white/85 max-w-xl mx-auto leading-relaxed">
              Wide range of Agri Pipes, Plumbing Pipes & Fittings for agriculture, plumbing, infrastructure and industrial applications.
            </p>
            <button
              onClick={onExploreProducts}
              className="inline-flex items-center gap-2 bg-white text-[#003F82] hover:bg-[#EAF3FA] px-8 py-3.5 rounded-lg font-semibold text-sm transition-all"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
