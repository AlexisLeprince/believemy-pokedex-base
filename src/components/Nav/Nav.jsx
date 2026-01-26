export default function Nav() {
    return (
        <nav className="flex justify-center pb-10">
            <div className="font-semibold text-xl rounded-full overflow-hidden">
                {/* Links */}
                <div className="flex">
                    <a
                        href="/"
                        className={({ isActive }) =>
                            `font-semibold px-10 py-5 hover:bg-yellow-100 hover:text-black duration-150 ${
                                isActive
                                    ? "bg-yellow-100 text-black"
                                    : "bg-yellow-500 text-white"
                            }`
                        }
                    >
                        Accueil
                    </a>
                    <a
                        href="/about"
                        className={({ isActive }) =>
                            `font-semibold px-10 py-5 hover:bg-yellow-100 hover:text-black duration-150 ${
                                isActive
                                    ? "bg-yellow-100 text-black"
                                    : "bg-yellow-500 text-white"
                            }`
                        }
                    >
                        À Propos
                    </a>
                    <a
                        href="/create-pokemon"
                        className={({ isActive }) =>
                            `font-semibold px-10 py-5 hover:bg-yellow-100 hover:text-black duration-150 ${
                                isActive
                                    ? "bg-yellow-100 text-black"
                                    : "bg-yellow-500 text-white"
                            }`
                        }
                    >
                        Créer un pokémon
                    </a>
                </div>
            </div>
        </nav>
    );
}
