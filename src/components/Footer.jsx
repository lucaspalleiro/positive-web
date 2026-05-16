export default function Footer() {
  return (
    <footer className="bg-moss text-cream pt-20 pb-10 px-6 md:px-16 rounded-t-[3rem] mt-[-3rem] relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <div className="flex flex-col gap-6">
          <div className="text-4xl font-script tracking-wide text-cream">
            Positive
          </div>
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2 w-max shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E6DEC8] animate-pulse"></div>
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-cream/90">
              Agenda abierta / Reservando ahora
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 text-sm font-sans">
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-cream/50 mb-2">Navegación</h4>
            <a href="#" className="text-cream/80 hover:text-white transition-colors">Beneficios</a>
            <a href="#" className="text-cream/80 hover:text-white transition-colors">Mitos</a>
            <a href="#" className="text-cream/80 hover:text-white transition-colors">Agendar turno</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-cream/50 mb-2">Contacto</h4>
            <a href="#" className="text-cream/80 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-cream/80 hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/20 flex justify-between items-center text-xs text-cream/60 font-sans">
        <p>© 2026 Positive. Todos los derechos reservados.</p>
        <p>Hecho con amor</p>
      </div>
    </footer>
  );
}
