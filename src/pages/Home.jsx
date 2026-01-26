import { useState, useEffect } from "react";
import Pokecard from "../components/Pokecard/Pokecard";

export default function Home() {
    // States
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
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
                    Chargement...
                </div>
            )}

            {/* Add */}
            <div className="flex justify-center my-10">
                <button
                    className="bg-white hover:bg-gray-50 rounded-full text-black py-2 px-5 text-lg font-semibold shadow-lg hover:shadow-xl transition duration-150 disabled:opacity-80 disabled:cursor-wait"
                    disabled={loading}
                >
                    Encore plus de Pokémons !
                </button>
            </div>
        </div>
    );
}
