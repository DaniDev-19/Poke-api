import { useNavigate } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
import { Helmet } from "../utils/helmet";

const BASE_URL = "https://poke-api-six-theta.vercel.app";

function Error() {
  const navigate = useNavigate();

  const HandleNavigate = () => {
    navigate('/');
  };

  useSeo({
    title: '404 - Página no encontrada | PokeAPI',
    description: 'La ruta que buscas no existe. Regresa al listado principal de Pokémon en PokeAPI.',
    canonicalUrl: `${BASE_URL}/PokeApi`,
    ogTitle: '404 - Página no encontrada | PokeAPI',
    ogImage: `${BASE_URL}/poke.svg`,
    twitterTitle: '404 - Página no encontrada | PokeAPI',
    twitterDescription: 'La ruta que buscas no existe. Regresa al listado principal de Pokémon en PokeAPI.',
  });

  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | PokeAPI</title>
        <meta
          name="description"
          content="La ruta que buscas no existe. Regresa al listado principal de Pokémon en PokeAPI."
        />
        <link rel="canonical" href={`${BASE_URL}/PokeApi`} />
      </Helmet>
      <div className="container mx-auto flex flex-col mt-100 mb-auto p-auto">
        <h1 className="text-9xl mb-10 text-amber-500 font-bold">
          Error <strong className="text-red-700">404</strong> Not Found
        </h1>
        <p className="text-5xl">
          <strong>Opps!!</strong> Parece La ruta que estas buscando no puede ser
          encontrada o no existe
        </p>

        <div className="mt-10">
          <button
            className="justify-center flex-col  px-10 py-5 border rounded-2xl border-amber-50  text-5xl hover:bg-blue-950 transition-all cursor-pointer"
            onClick={HandleNavigate}
          >
            ← Volvamos
          </button>
        </div>
      </div>
    </>
  );
}

export default Error;
  