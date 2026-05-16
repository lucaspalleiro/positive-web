import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Archive() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.archive-card');

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; 

        gsap.to(card, {
          scale: 0.95,
          filter: 'blur(10px)',
          opacity: 0.6,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[index + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        });
      });

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: 'bottom bottom',
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-cream pb-[100vh]">
      <div className="absolute top-0 left-0 w-full h-[300vh] pointer-events-none"></div>

      <Card 
        index={1} 
        title="Tecnología Segura" 
        subtitle="Equipos de última generación para cuidar tu piel."
        bgColor="bg-[#E6DEC8]"
        textColor="text-charcoal"
      >
        <SoftPulseAnimation />
      </Card>

      <Card 
        index={2} 
        title="Atención Personalizada" 
        subtitle="Cada cuerpo es único, tu tratamiento también."
        bgColor="bg-moss"
        textColor="text-cream"
      >
        <WarmGlowAnimation />
      </Card>

      <Card 
        index={3} 
        title="Piel Saludable" 
        subtitle="Resultados que se sienten desde el primer día."
        bgColor="bg-clay"
        textColor="text-cream"
      >
        <VitalityRingsAnimation />
      </Card>
    </section>
  );
}

function Card({ index, title, subtitle, bgColor, textColor, children }) {
  return (
    <div className={`archive-card absolute top-0 left-0 w-full h-[100dvh] ${bgColor} ${textColor} flex items-center justify-center overflow-hidden origin-top`}>
      {index > 1 && (
        <div className="absolute top-0 left-0 w-full h-8 bg-black/5 rounded-b-[3rem] shadow-sm"></div>
      )}
      
      <div className="max-w-6xl w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-4 relative z-10">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest opacity-60">Fase 0{index}</p>
          <h2 className="font-script text-6xl md:text-8xl">{title}</h2>
          <p className="font-sans text-xl opacity-80 leading-relaxed max-w-sm">{subtitle}</p>
        </div>
        
        <div className="flex-1 w-full flex justify-center items-center h-80 relative z-0">
          {children}
        </div>
      </div>
    </div>
  );
}

// Organic Custom Animations

function SoftPulseAnimation() {
  return (
    <div className="relative w-64 h-64 flex justify-center items-center">
      <div className="absolute w-full h-full bg-cream/20 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      <div className="absolute w-3/4 h-3/4 bg-cream/40 rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="w-1/2 h-1/2 bg-cream rounded-full shadow-lg flex items-center justify-center">
        <svg className="w-12 h-12 text-moss/50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,22C12,22 10.9,21.5 9.5,20C8.1,18.5 7,16.5 7,14C7,11.2 9.2,9 12,9C14.8,9 17,11.2 17,14C17,16.5 15.9,18.5 14.5,20C13.1,21.5 12,22 12,22M12,11C10.3,11 9,12.3 9,14C9,15.8 9.9,17.4 11,18.5C11.5,19.1 12,19.5 12,19.5C12,19.5 12.5,19.1 13,18.5C14.1,17.4 15,15.8 15,14C15,12.3 13.7,11 12,11Z" />
        </svg>
      </div>
    </div>
  );
}

function WarmGlowAnimation() {
  return (
    <div className="relative w-64 h-64 flex justify-center items-center">
      <div className="absolute w-40 h-40 bg-clay/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
      <div className="absolute w-32 h-32 bg-[#E6DEC8]/40 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite_reverse]"></div>
      <div className="w-16 h-16 bg-cream/80 rounded-full backdrop-blur-md shadow-xl"></div>
    </div>
  );
}

function VitalityRingsAnimation() {
  return (
    <div className="relative w-64 h-64 flex justify-center items-center">
      <div className="absolute w-full h-full border border-cream/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
      <div className="absolute w-4/5 h-4/5 border border-cream/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
      <div className="absolute w-3/5 h-3/5 border-2 border-cream/60 rounded-full"></div>
      <div className="w-1/4 h-1/4 bg-cream rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
    </div>
  );
}
