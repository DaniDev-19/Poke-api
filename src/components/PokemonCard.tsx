import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonDetail } from "../services/pokemonApi";
import type { Pokemon } from "../types/types";
import { getTypeColor } from "../utils/typePokemon";

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const Navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      const id = url.split("/").filter(Boolean).pop();
      const data = await getPokemonDetail(id!);
      setPokemon(data);
    };
    fetchDetail();
  }, [url]);

  if (!pokemon)
    return <div className="bg-gray-200 p-4 rounded">Cargando {name}... </div>;

  const primaryType = pokemon.types[0]?.type.name;
  const bgColor = getTypeColor(primaryType);

  return (
    <div className={`${bgColor} text-white p-2 rounded-3xl shadow-md group`}>
      <img
        src={pokemon.sprites.front_default}
        alt={`Imagen frontal de ${pokemon.name}, un Pokémon de tipo ${pokemon.types.map((t) => t.type.name).join(' y ')}`}
        loading="lazy"
        className="w-34 h-34 mx-auto transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce cursor-pointer"
      />
      <h3 className="text-center capitalize font-bold text-2xl text-white">
        {pokemon.name}
      </h3>
      <p className="text-center">
        Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>
      <button
        onClick={() => Navigate(`/pokemon/${pokemon.id}`)}
        className="mt-2 bg-gray-300 text-black font-bold px-4 py-2 rounded hover:bg-gray-200 cursor-pointer transition-all"
      >
        Ver Detalle
      </button>
    </div>
  );
};

export default PokemonCard;
