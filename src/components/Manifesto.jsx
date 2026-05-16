import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to('.manifesto-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'center center',
          scrub: 1,
        }
      });

      tl.fromTo(text1Ref.current, 
        { y: 50, opacity: 0, rotationX: -10 },
        { y: 0, opacity: 0.8, rotationX: 0, duration: 1 }
      )
      .fromTo(text2Ref.current,
        { y: 50, opacity: 0, rotationX: -10 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1 },
        '-=0.5'
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-48 flex items-center justify-center overflow-hidden bg-moss perspective-1000"
    >
      {/* Texture & Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden mix-blend-overlay opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" 
          alt="Natural organic texture" 
          className="manifesto-bg w-full h-[130%] object-cover origin-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss/50 via-transparent to-moss/50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p 
          ref={text1Ref}
          className="font-sans text-xl md:text-2xl text-cream/80 mb-6 font-light tracking-wide transform-gpu"
        >
          Lo normal es conformarse con métodos dolorosos.
        </p>
        <p 
          ref={text2Ref}
          className="font-script text-5xl md:text-7xl lg:text-8xl text-cream transform-gpu leading-tight"
        >
          Nosotras elegimos <br/> la libertad definitiva.
        </p>
      </div>
    </section>
  );
}
