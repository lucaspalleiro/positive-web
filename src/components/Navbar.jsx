import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create the scroll trigger for the navbar
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          className: 'nav-scrolled',
          targets: navRef.current,
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <nav
        ref={navRef}
        className="pointer-events-auto transition-all duration-500 ease-in-out px-8 py-4 rounded-[3rem] flex items-center justify-between w-full max-w-5xl text-charcoal bg-transparent border border-transparent"
        style={{
          // We will use CSS for the transition to keep it buttery smooth with Tailwind
        }}
      >
        <div className="text-3xl font-script tracking-wide text-moss">
          Positive
        </div>
        <ul className="hidden md:flex gap-8 font-sans text-sm font-medium">
          <li><a href="#tratamientos" className="hover:opacity-70 transition-opacity">Tratamientos</a></li>
          <li><a href="#metodo" className="hover:opacity-70 transition-opacity">Método</a></li>
          <li><a href="#planes" className="hover:opacity-70 transition-opacity">Planes</a></li>
        </ul>
        <button className="px-6 py-2 bg-charcoal/5 hover:bg-charcoal/10 backdrop-blur-md rounded-full text-sm font-medium transition-colors text-charcoal">
          Agenda tu sesión
        </button>
      </nav>
      {/* Tailwind classes applied via CSS for the toggleClass */}
      <style>{`
        .nav-scrolled {
          background-color: rgba(253, 251, 247, 0.85) !important;
          backdrop-filter: blur(12px) !important;
          color: var(--color-moss) !important;
          border-color: rgba(0, 0, 0, 0.05) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;
        }
        .nav-scrolled button {
          background-color: var(--color-moss) !important;
          color: var(--color-cream) !important;
        }
      `}</style>
    </div>
  );
}
