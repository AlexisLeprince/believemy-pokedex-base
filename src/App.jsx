import { useEffect, useState } from "react";
import Logo from "./components/Logo/Logo";
import Pokecard from "./components/Pokecard/Pokecard";
import { toast } from "react-toastify";

export default function App() {
  // State
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  // Récupérer les 30 premiers pokemon
  const fetchPokemons = async (add = false) => {
    setLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=30${add && "&offset=" + pokemons.length}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      toast.error("Une erreur est survenue");
      setLoading(false);
    }
    const data = await response.json(); // 30 premiers pokemons

    // récupérer les détails
    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return await response.json();
    });

    const pokemonDetails = await Promise.all(promises);
    setPokemons([...pokemons, ...pokemonDetails]);
    setLoading(false);
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Logo />

      <div>
        {/* Pokemons */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto mt-10 md:p-0 p-5">
          {pokemons.map((pokemon, index) => (
            <Pokecard key={index} pokemon={pokemon} />
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center text-white mt-5">
            Chargement en cours...
          </div>
        )}

        {/* avoir plus de pokemons */}
        <div className="flex justify-center my-10">
          <button
            className="bg-white hover:bg-gray-50 rounded-full py-2 px-5 text-lg font-semibold text-black shadow-lg hover:shadow-xl transition duration-150"
            onClick={() => fetchPokemons(true)}
          >
            Encore plus de Pokemons
          </button>
        </div>
      </div>
    </div>
  );
}
