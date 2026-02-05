// Temp Component
export default function Temp() {
  return (
    // Background section
    <section className="min-h-screen overflow-hidden bg-amethystlight">
      {/* Logo and AMETHYST text */}
      <div className="flex flex-col md:flex-row items-center justify-center relative z-20 px-4 pt-8 md:pt-0">
        <svg
          className="text-amethystdark text-4xl sm:text-6xl md:text-8xl tracking-[0.24em] text-center inline-block"
          style={{
            height: "1em",
            width: "auto",
            fontFamily: "TikTok Font",
            overflow: "visible",
          }}
          viewBox="0 -40 1400 280"
          role="img"
          aria-label="AMETHYST"
        >
          <defs>
            <path id="amethyst-curve" d="M 40 236 A 3400 3400 0 0 1 1360 236" />
          </defs>
          <text
            textAnchor="middle"
            fill="currentColor"
            stroke="#fff"
            strokeWidth="64"
            strokeLinejoin="round"
            strokeLinecap="round"
            paintOrder="stroke fill"
            fontSize="280"
            transform="rotate(-7 700 200)"
          >
            <textPath href="#amethyst-curve" startOffset="50%">
              AMETHYST
            </textPath>
          </text>
        </svg>
        <img
          src="/logo_base.png"
          alt="Amethyst Derg holding a sewing needle"
          className="w-2/3 sm:w-1/2 md:w-1/4 h-auto p-2"
        ></img>
      </div>
      {/* Circle background and DERG text*/}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/3 sm:top-1/4 md:top-1/4 w-[300%] sm:w-[250%] md:w-[200%] aspect-square rounded-full bg-amethystdark border-8 md:border-20 border-white z-10 text-center">
        <svg
          className="text-amethystlight text-4xl sm:text-6xl md:text-8xl tracking-[0.24em] inline-block -translate-x-15 -translate-y-1"
          style={{
            height: "1em",
            width: "auto",
            fontFamily: "TikTok Font",
            overflow: "visible",
          }}
          viewBox="0 -40 800 280"
          role="img"
          aria-label="DERG"
        >
          <defs>
            <path id="derg-curve" d="M 40 236 A 3400 3400 0 0 1 760 236" />
          </defs>
          <text
            textAnchor="middle"
            fill="currentColor"
            fontSize="280"
            transform="rotate(-2 400 200)"
          >
            <textPath href="#derg-curve" startOffset="50%">
              DERG
            </textPath>
          </text>
        </svg>
      </div>
      {/* Under Construction Notice */}
      <div
        className="relative z-30 pt-8 text-center text-amethystlight"
        style={{ fontFamily: "TikTok Font" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wider">
          WEBSITE UNDER CONSTRUCTION
        </h1>
        <h2 className="mt-2 text-lg sm:text-xl md:text-2xl tracking-widest">
          ...but you can find me at the links below! Let’s chat!
        </h2>
      </div>
      {/* Links and Icons */}
      <div className="relative z-30 flex flex-row flex-wrap items-center justify-center mt-8 gap-4 sm:gap-5 w-full max-w-lg mx-auto">
        {/* Mail */}
        <a
          href="mailto:amethystderg@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
        >
          <img
            src="/email_logo.png"
            alt="Mail Icon"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>
        {/* BlueSky */}
        <a
          href="https://bsky.app/profile/amethystderg.bsky.social"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
        >
          <img
            src="/bluesky_logo.png"
            alt="BlueSky Icon"
            className="h-12 sm:h-14 w-auto object-contain scale-150"
          />
        </a>
        {/* Twitch */}
        <a
          href="https://www.twitch.tv/thatpurplederg"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
        >
          <img
            src="/twitch_logo.png"
            alt="Twitch Icon"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@amethyst_derg"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
        >
          <img
            src="/tiktok_logo.png"
            alt="TikTok Icon"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>
      </div>
      {/* Footer */}
      <div className="relative z-30 pt-8 text-center text-amethystlight">
        <p className="text-sm sm:text-base tracking-widest">
          © 2026 Amethyst Derg. All rights reserved.
        </p>
      </div>
    </section>
  );
}
