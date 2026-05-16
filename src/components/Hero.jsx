import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-text-1',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
      .fromTo(
        '.hero-text-2',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=0.6'
      )
      .fromTo(
        '.hero-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.8'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-end pb-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Tratamiento Láser" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-charcoal">
        <h1 className="flex flex-col gap-0 md:-space-y-4">
          <span className="hero-text-1 font-sans text-3xl md:text-5xl font-bold tracking-tight text-charcoal/90">
            Tu piel libre.
          </span>
          <span className="hero-text-2 font-script text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] font-light text-moss">
            Tu vida más simple.
          </span>
        </h1>
        
        <div className="hero-btn mt-12 flex items-center gap-6">
          <button className="group relative overflow-hidden rounded-full bg-clay px-8 py-4 font-sans text-sm font-semibold tracking-wide text-cream transition-transform hover:scale-[1.02] duration-500 shadow-md">
            <span className="relative z-10">Agenda tu sesión</span>
            <div className="absolute inset-0 z-0 h-full w-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="font-sans text-sm text-charcoal/70 max-w-[240px] text-balance hidden sm:block">
            Depilación definitiva con tecnología segura y atención personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}
