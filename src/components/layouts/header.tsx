import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* cabecera normal */}
      <header className="top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold tracking-tighter text-white">
                Poke<span className="text-zyntaxis-purple">Api</span>
              </span>
            </div>

            {/* hamburguesa (visible sólo en <md) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* navegación de escritorio */}
            <nav className="hidden md:flex space-x-8 text-xl font-center text-gray-300 ">
              <a href="#" className="hover:text-white transition-colors">
                Pokedex
              </a>
              <a href="#" className="hover:text-white transition-colors">
                PokePark
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Poke Moon
              </a>
            </nav>

            {/* botón de contacto, sólo en md+ */}
            <button className="hidden md:inline-block rounded-full bg-white px-5 py-2 text-xl font-semibold text-black hover:bg-white/80 transition-all cursor-pointer ">
              Contacto
            </button>
          </div>
        </div>
      </header>

      {/* menú móvil: overlay de pantalla completa */}
      {open && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-75 flex flex-col items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white p-2"
            aria-label="Cerrar menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="space-y-6 text-xl text-white text-center">
            <a href="#" className="block hover:underline">
              Pokedex
            </a>
            <a href="#" className="block hover:underline">
              PokePark
            </a>
            <a href="#" className="block hover:underline">
              Pokemon Moon
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;