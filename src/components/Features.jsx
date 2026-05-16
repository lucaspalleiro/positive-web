import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2, CheckCircle2, Info } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="font-script text-5xl md:text-6xl text-moss mb-2">Cuidado real</h2>
          <h3 className="font-display font-medium text-3xl md:text-4xl text-charcoal">para resultados reales</h3>
          <p className="font-sans text-charcoal/70 max-w-xl mt-4">
            Nos alejamos de lo frío y clínico. Creamos un espacio donde te cuidamos, derribamos mitos y te acompañamos en tu proceso de liberación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Benefits Deck */}
          <BenefitsDeck />

          {/* Feature 2: Mitos */}
          <MythsCard />

          {/* Feature 3: Schedule Protocol */}
          <ScheduleProtocol />
        </div>
      </div>
    </section>
  );
}

function BenefitsDeck() {
  const containerRef = useRef(null);
  const [cards] = useState([
    { id: 1, title: 'Piel siempre lista', desc: 'Disfrutá sin pensar en depilarte.' },
    { id: 2, title: 'Chau irritación', desc: 'Olvidate de foliculitis y rojeces.' },
    { id: 3, title: 'Ahorro de tiempo', desc: 'Recuperá horas de tu vida.' }
  ]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.diag-card');
      const positions = [
        { y: 0, scale: 1, zIndex: 30, opacity: 1 },
        { y: 15, scale: 0.95, zIndex: 20, opacity: 0.8 },
        { y: 30, scale: 0.9, zIndex: 10, opacity: 0.5 }
      ];

      cards.forEach((card, i) => {
        gsap.set(card, positions[i]);
      });

      const tl = gsap.timeline({ repeat: -1 });
      
      for (let i = 0; i < 3; i++) {
        tl.to(cards, {
          duration: 0.8,
          ease: "power2.inOut",
          delay: 2.5,
          y: (index) => positions[(index + i + 1) % 3].y,
          scale: (index) => positions[(index + i + 1) % 3].scale,
          zIndex: (index) => positions[(index + i + 1) % 3].zIndex,
          opacity: (index) => positions[(index + i + 1) % 3].opacity,
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white rounded-3xl p-8 h-80 flex flex-col justify-between relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-moss/10">
      <div>
        <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-clay mb-2">01 // Tu proceso</h3>
        <p className="font-display font-medium text-xl text-charcoal">Beneficios diarios</p>
      </div>
      <div className="relative h-40 w-full mt-4 flex justify-center">
        {cards.map((card, idx) => (
          <div 
            key={card.id} 
            className="diag-card absolute w-full max-w-[240px] bg-[#FDFBF7] border border-moss/10 rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-moss" />
              <p className="font-sans font-medium text-sm text-charcoal">{card.title}</p>
            </div>
            <p className="text-xs text-charcoal/60 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MythsCard() {
  const [textIndex, setTextIndex] = useState(0);
  const messages = [
    "El láser no duele, es súper tolerable.",
    "Se puede hacer en verano sin problema.",
    "Notarás cambios desde la sesión 1.",
    "Es ideal para pieles sensibles.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-moss/10 rounded-3xl p-8 h-80 flex flex-col justify-between text-charcoal relative overflow-hidden group hover:shadow-md transition-shadow border border-moss/20">
      <div className="flex items-center justify-between z-10">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-moss mb-2">02 // Info real</h3>
      </div>
      
      <div className="z-10 font-sans text-lg font-medium text-charcoal flex flex-col">
        <p className="font-display text-xl mb-6">Derribando Mitos</p>
        <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-moss/10 relative">
          <Info className="w-5 h-5 text-clay shrink-0 mt-0.5" />
          <div className="relative h-12 w-full">
            <span className="absolute top-0 left-0 animate-[fade_4s_infinite]">
              {messages[textIndex]}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
      `}</style>
      
      {/* Soft botanical decoration */}
      <svg className="absolute -bottom-10 -right-10 w-40 h-40 text-moss opacity-10 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,22C12,22 10.9,21.5 9.5,20C8.1,18.5 7,16.5 7,14C7,11.2 9.2,9 12,9C14.8,9 17,11.2 17,14C17,16.5 15.9,18.5 14.5,20C13.1,21.5 12,22 12,22M12,11C10.3,11 9,12.3 9,14C9,15.8 9.9,17.4 11,18.5C11.5,19.1 12,19.5 12,19.5C12,19.5 12.5,19.1 13,18.5C14.1,17.4 15,15.8 15,14C15,12.3 13.7,11 12,11Z" />
      </svg>
    </div>
  );
}

function ScheduleProtocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.set('.cursor', { x: 0, y: 50, opacity: 0 })
        .set('.day-active', { backgroundColor: 'transparent', color: '#2A332C' })
        .set('.btn-save', { scale: 1, backgroundColor: '#C27C65' });

      tl.to('.cursor', { opacity: 1, duration: 0.3 })
        .to('.cursor', { x: 75, y: 10, duration: 1, ease: 'power2.inOut' }) 
        .to('.cursor', { scale: 0.8, duration: 0.1 })
        .to('.cursor', { scale: 1, duration: 0.1 })
        .to('.day-active', { backgroundColor: '#607A65', color: '#FFF', duration: 0.2 }, '-=0.1')
        .to('.cursor', { x: 120, y: 70, duration: 0.8, ease: 'power2.inOut', delay: 0.3 })
        .to('.cursor', { scale: 0.8, duration: 0.1 })
        .to('.btn-save', { scale: 0.95, opacity: 0.9, duration: 0.1 }, '<')
        .to('.cursor', { scale: 1, duration: 0.1 })
        .to('.btn-save', { scale: 1, opacity: 1, duration: 0.1 }, '<')
        .to('.cursor', { opacity: 0, y: 100, duration: 0.5, delay: 0.3 });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  return (
    <div ref={containerRef} className="bg-white rounded-3xl p-8 h-80 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-moss/10">
      <div>
        <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-clay mb-2">03 // Simpleza</h3>
        <p className="font-display font-medium text-xl text-charcoal">Tu turno a un clic</p>
      </div>

      <div className="relative mt-6">
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) => (
            <div 
              key={day} 
              className={`text-center py-2 text-xs font-sans rounded-md border border-charcoal/5 ${day === 'X' ? 'day-active transition-colors' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-end">
          <div className="btn-save px-4 py-2 bg-clay text-cream text-sm font-medium rounded-full shadow-sm">
            Reservar ahora
          </div>
        </div>

        <div className="cursor absolute top-0 left-0 z-20 text-charcoal drop-shadow-md">
          <MousePointer2 className="w-5 h-5 fill-cream stroke-moss stroke-2" />
        </div>
      </div>
    </div>
  );
}
