// Temp Component
export default function Temp() {
  return (
    // Background section
    <section className="min-h-screen overflow-hidden bg-amethystlight">
      {/* Logo and AMETHYST text */}
      <div className="flex flex-col md:flex-row items-center justify-center relative z-20 px-4 pt-8 md:pt-0">
        <svg
          className="text-amethystdark text-4xl sm:text-6xl md:text-8xl tracking-widest text-center inline-block"
          style={{ height: "1em", width: "auto", fontFamily: "TikTok Font" }}
          viewBox="0 -40 1400 280"
          role="img"
          aria-label="AMETHYST"
        >
          <text
            x="700"
            y="200"
            textAnchor="middle"
            fill="currentColor"
            stroke="#fff"
            strokeWidth="44"
            strokeLinejoin="round"
            strokeLinecap="round"
            paintOrder="stroke fill"
            fontSize="280"
          >
            AMETHYST
          </text>
        </svg>
        <img
          src="/logo_base.png"
          alt="Amethyst Derg holding a sewing needle"
          className="w-2/3 sm:w-1/2 md:w-1/4 h-auto p-2"
        ></img>
      </div>
      {/* Circle background and DERG text*/}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 md:top-1/4 w-[300%] sm:w-[250%] md:w-[200%] aspect-square rounded-full bg-amethystdark border-8 md:border-20 border-white z-10 text-center">
        <svg
          className="text-amethystlight text-4xl sm:text-6xl md:text-8xl tracking-widest inline-block"
          style={{ height: "1em", width: "auto", fontFamily: "TikTok Font" }}
          viewBox="0 -40 800 280"
          role="img"
          aria-label="DERG"
        >
          <text
            x="400"
            y="200"
            textAnchor="middle"
            fill="currentColor"
            fontSize="280"
          >
            DERG
          </text>
        </svg>
      </div>
      {/* Under Construction Notice */}
      <div
        className="relative z-30 text-center text-amethystlight"
        style={{ fontFamily: "TikTok Font" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wider">
          WEBSITE UNDER CONSTRUCTION
        </h1>
        <h2 className="mt-2 text-lg sm:text-xl md:text-2xl tracking-widest">
          ...but you can find me at the links below! Let’s chat!
        </h2>
      </div>
    </section>
  );
}
