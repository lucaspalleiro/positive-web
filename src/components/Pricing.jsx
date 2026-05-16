export default function Pricing() {
  return (
    <section id="planes" className="py-32 px-6 md:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-script text-6xl md:text-7xl text-moss mb-4">Combos y Zonas</h2>
          <p className="font-sans text-charcoal/70 max-w-xl mx-auto text-lg">
            Planes diseñados para adaptarse a lo que realmente necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Plan 1 */}
          <div className="bg-white rounded-[2rem] p-8 text-center flex flex-col items-center shadow-sm border border-moss/10">
            <h3 className="font-display font-medium text-2xl mb-2 text-charcoal">Zonas Chicas</h3>
            <div className="font-sans text-3xl font-bold my-6 text-moss">$15.000<span className="text-sm font-normal text-charcoal/50">/sesión</span></div>
            <ul className="text-sm text-charcoal/70 space-y-3 mb-8">
              <li>Bozo y Mentón</li>
              <li>Axilas</li>
              <li>Línea alba</li>
            </ul>
            <button className="w-full py-3 rounded-full border border-moss/20 font-medium text-moss hover:bg-moss/5 transition-colors">
              Consultar
            </button>
          </div>

          {/* Plan 2 (Highlighted) */}
          <div className="bg-moss rounded-[2rem] p-10 text-center flex flex-col items-center shadow-xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-clay text-cream text-xs font-sans font-semibold py-1.5 px-5 rounded-full uppercase tracking-widest shadow-md">
              Más elegido
            </div>
            <h3 className="font-display font-medium text-2xl mb-2 text-cream">Cuerpo Completo</h3>
            <div className="font-sans text-4xl font-bold my-6 text-clay">$45.000<span className="text-sm font-normal text-cream/70">/sesión</span></div>
            <ul className="text-sm text-cream/90 space-y-3 mb-8">
              <li>Piernas enteras</li>
              <li>Axilas y Cavado</li>
              <li>Rostro completo</li>
              <li>Ahorro significativo</li>
            </ul>
            <button className="w-full py-3 rounded-full bg-clay text-cream font-medium hover:bg-clay/90 transition-colors shadow-lg">
              Agendar Combo
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-[2rem] p-8 text-center flex flex-col items-center shadow-sm border border-moss/10">
            <h3 className="font-display font-medium text-2xl mb-2 text-charcoal">Zonas Medias</h3>
            <div className="font-sans text-3xl font-bold my-6 text-moss">$25.000<span className="text-sm font-normal text-charcoal/50">/sesión</span></div>
            <ul className="text-sm text-charcoal/70 space-y-3 mb-8">
              <li>Media pierna</li>
              <li>Brazos</li>
              <li>Cavado simple</li>
            </ul>
            <button className="w-full py-3 rounded-full border border-moss/20 font-medium text-moss hover:bg-moss/5 transition-colors">
              Consultar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
