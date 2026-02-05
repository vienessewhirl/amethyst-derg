// Temp Hero Component
export default function TempHero() {
  return (
    <div className="temp-hero" aria-hidden="true">
      {/* Hero: AMETHYST title + logo */}
      <div className="temp-logo-row">
        <svg
          className="amethyst-title-mobile"
          style={{
            height: "1em",
            width: "auto",
            fontFamily: "TikTok Font",
            overflow: "visible",
          }}
          viewBox="-60 -40 1520 280"
          role="img"
          aria-labelledby="amethyst-title-mobile"
          focusable="false"
        >
          <title id="amethyst-title-mobile">AMETHYST</title>
          <defs>
            <path
              id="amethyst-curve-mobile"
              d="M 0 236 A 3400 3400 0 0 1 1460 236"
            />
          </defs>
          <text
            className="amethyst-lettering"
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
            <textPath href="#amethyst-curve-mobile" startOffset="50%">
              AMETHYST
            </textPath>
          </text>
        </svg>
        <svg
          className="amethyst-title-desktop-only"
          style={{
            height: "1em",
            width: "auto",
            fontFamily: "TikTok Font",
            overflow: "visible",
          }}
          viewBox="-80 -40 1560 280"
          role="img"
          aria-labelledby="amethyst-title-desktop"
          focusable="false"
        >
          <title id="amethyst-title-desktop">AMETHYST</title>
          <defs>
            <path
              id="amethyst-curve-desktop"
              d="M -40 236 A 5200 5200 0 0 1 1520 236"
            />
          </defs>
          <text
            className="amethyst-lettering"
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
            <textPath href="#amethyst-curve-desktop" startOffset="50%">
              AMETHYST
            </textPath>
          </text>
        </svg>
        <img
          src="/logo_base.png"
          alt="Amethyst Derg holding a sewing needle"
          className="temp-logo"
        ></img>
      </div>
      {/* Hero: circle + DERG text */}
      <div className="temp-circle">
        <svg
          className="derg-title"
          style={{
            height: "1em",
            width: "auto",
            fontFamily: "TikTok Font",
            overflow: "visible",
          }}
          viewBox="0 -40 800 280"
          role="img"
          aria-labelledby="derg-title"
          focusable="false"
        >
          <title id="derg-title">DERG</title>
          <defs>
            <path id="derg-curve" d="M 40 236 A 3400 3400 0 0 1 760 236" />
          </defs>
          <text
            className="derg-lettering"
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
    </div>
  );
}
