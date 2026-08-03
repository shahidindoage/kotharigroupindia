import React, { useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Sprout } from 'lucide-react';

const TOTAL_FRAMES = 240;
const SCROLL_DURATION_VH = 250;

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const RAIN_DROPS = Array.from({ length: 45 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  delay: (i * 0.71) % 2.6,
  duration: 1.4 + ((i * 13) % 10) / 10,
  opacity: 0.2 + ((i * 7) % 6) / 10,
  height: 6 + (i % 6) * 3
}));

export const Home3Hero: React.FC = () => {
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
      img.src = `/frames2/ezgif-frame-${idx}.jpg`;
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

        {/* Raining Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20 rotate-[6deg] scale-110" aria-hidden="true">
          {RAIN_DROPS.map((d, i) => (
            <span
              key={i}
              className="absolute top-0 w-[2px] rounded-full bg-gradient-to-b from-transparent via-[#9FE0F5] to-[#5FB2E6]"
              style={{
                left: `${d.left}%`,
                height: `${d.height}px`,
                opacity: d.opacity,
                ['--drop-opacity' as string]: d.opacity,
                animation: `rainFall ${d.duration}s linear ${d.delay}s infinite`
              }}
            />
          ))}
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-8">
          {/* Subtle Readability Scrim */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,17,33,0.4)_0%,rgba(2,17,33,0.2)_45%,transparent_72%)]" />

          <div className="relative max-w-3xl text-center space-y-6">
            <div
              className=" text-[#fff] inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide"
              style={{ animation: 'fadeSlideUp 0.8s 0.1s both' }}
            >
              <Sprout className="w-4 h-4 text-[#A9DDB8]" />
              Micro Irrigation Systems
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight text-white"
              style={{ animation: 'fadeSlideUp 0.8s 0.2s both' }}
            >
              Smart Irrigation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#A9DDB8] via-[#C9EFD4] to-[#FFFFFF] mt-1">
                for Better Tomorrow.
              </span>
            </h1>

            <p
              className="mx-auto max-w-2xl text-sm sm:text-lg font-light text-white/90 leading-relaxed"
              style={{ animation: 'fadeSlideUp 0.8s 0.3s both' }}
            >
              We provide complete micro irrigation solutions that save water, increase yield and improve farm productivity.
            </p>

            <div style={{ animation: 'fadeSlideUp 0.8s 0.4s both' }}>
              <button
                onClick={() => scrollToId('products')}
                className="inline-flex items-center gap-2 bg-white text-[#1575B3] hover:bg-[#7CC4EE] px-8 py-4 rounded-xl font-semibold text-sm transition-all shadow-lg hover:-translate-y-0.5 group"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
