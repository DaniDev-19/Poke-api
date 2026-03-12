const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-color-dark/50 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-bold tracking-tighter text-white">
              PokeApi
            </span>
            <p className="mt-4 text-xl text-gray-300">
              Elevando el estándar de la Pokedex a través de software con precisión y buena arquitectura.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold uppercase tracking-wider text-white">Servicios</h3>
            <ul className="mt-4 space-y-2 text-xl text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Pokedex</li>
              <li className="hover:text-white transition-colors cursor-pointer">PokePark</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pokemon Moon</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold uppercase tracking-wider text-white">Stack Top</h3>
            <ul className="mt-4 space-y-2 text-xl text-white">
              <li>Pikachu</li>
              <li>Bolbasur</li>
              <li>Raichu</li>
              <li>Pichu</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold uppercase tracking-wider text-white">Contacto</h3>
            <p className="mt-4 text-sm textwhite">¿Listo para escalar?</p>
            <a href="mailto:pokepark@gmail.com" className="mt-2 block text-xl font-medium text-white hover:underline">
              pokepark@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-2xl text-gray-500">
            &copy; 2026 DanijDev. Con <strong className="text-red-600">❤</strong> Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-gray-500">
             <span className="hover:text-white cursor-pointer transition-colors text-xl uppercase tracking-widest">GitHub</span>
             <span className="hover:text-white cursor-pointer transition-colors text-xl uppercase tracking-widest">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;