import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonDetail } from '../services/pokemonApi';
import type { Pokemon } from '../types/types';
import { getTypeColor } from '../utils/typePokemon';
import { useSeo } from '../hooks/useSeo';
import { Helmet } from '../utils/helmet';

const BASE_URL = "https://poke-api-six-theta.vercel.app";

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    getPokemonDetail(id)
      .then(setPokemon)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  useSeo({
    title: pokemon
      ? `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} - Detalles en PokeAPI`
      : 'Cargando...',
    description: pokemon
      ? `Descubre todo sobre ${pokemon.name}: tipos (${pokemon.types
          .map((t) => t.type.name)
          .join(', ')}), estadísticas, habilidades y más en PokeAPI.`
      : 'Cargando detalles de Pokémon...',
    keywords: pokemon
      ? `${pokemon.name}, Pokémon, detalles, tipos, estadísticas, PokeAPI`
      : 'Pokémon, detalles, PokeAPI',
    canonicalUrl: `${BASE_URL}/PokeApi/pokemon/${id}`,
    ogTitle: pokemon
      ? `${pokemon.name} - PokeAPI`
      : 'PokeAPI - Detalles de Pokémon',
    ogImage:
      pokemon?.sprites.other?.['official-artwork']?.front_default ||
      pokemon?.sprites.front_default ||
      `${BASE_URL}/poke.svg`,
    twitterTitle: pokemon
      ? `${pokemon.name} - PokeAPI`
      : 'PokeAPI - Detalles de Pokémon',
    twitterDescription: pokemon
      ? `Información completa de ${pokemon.name}: tipos, stats y habilidades.`
      : 'Detalles de Pokémon en PokeAPI.',
  });

  if (loading) return <p>Cargando detalle…</p>;
  if (!pokemon) return <p>Pokémon no encontrado.</p>;

  const primaryType = pokemon.types[0]?.type.name;
  const bgColor = getTypeColor(primaryType);

  return (
    <>
      <Helmet>
        <title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} - Detalles en PokeAPI</title>
        <meta
          name="description"
          content={`Descubre todo sobre ${pokemon.name}: tipos (${pokemon.types
            .map((t) => t.type.name)
            .join(', ')}), estadísticas, habilidades y más en PokeAPI.`}
        />
        <meta name="keywords" content={`${pokemon.name}, Pokémon, detalles, tipos, estadísticas, PokeAPI`} />
        <meta property="og:title" content={`${pokemon.name} - PokeAPI`} />
        <meta
          property="og:description"
          content={`Información completa de ${pokemon.name}: tipos, stats y habilidades.`}
        />
        <meta
          property="og:image"
          content={
            pokemon.sprites.other?.['official-artwork']?.front_default ||
            pokemon.sprites.front_default ||
            `${BASE_URL}/poke.svg`
          }
        />
        <link rel="canonical" href={`${BASE_URL}/PokeApi/pokemon/${id}`} />
      </Helmet>

      <div className={`min-h-screen p-8 ${bgColor} text-white`}>
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-white text-black px-3 py-1 rounded"
        >
          ← Volver
        </button>

        <div className="max-w-md mx-auto bg-black bg-opacity-25 rounded-xl p-6 sm:max-w-lg lg:max-w-2xl lg:mt-20">
          <h1 className="text-5xl font-bold capitalize text-center">
            {pokemon.name}
          </h1>

          <img
            src={pokemon.sprites.other?.['official-artwork']?.front_default
              || pokemon.sprites.front_default}
            alt={`Imagen oficial de ${pokemon.name}`}
            loading="lazy"
            className="w-56 h-56 mx-auto my-4"
          />

          <div className="text-center space-y-2">
            <p>Tipos: {pokemon.types.map(t => t.type.name).join(', ')}</p>
            <p>Altura: {(pokemon.height / 10).toFixed(1)} m</p>
            <p>Peso: {(pokemon.weight / 10).toFixed(1)} kg</p>
            <p>Habilidades: {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Estadísticas</h2>
            <ul className="space-y-1 sm:grid sm:grid-cols-2 sm:gap-x-4">
              {pokemon.stats.map(s => (
                <li key={s.stat.name} className="flex justify-between">
                  <span className="capitalize">{s.stat.name}</span>
                  <span>{s.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
 