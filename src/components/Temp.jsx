// React
import { useState } from "react";

// Temp Component
export default function Temp() {
  const [brokenIcons, setBrokenIcons] = useState({});
  const socialLinks = [
    {
      href: "mailto:amethystderg@gmail.com",
      src: "/icon_email.png",
      alt: "Email icon",
      label: "Email",
      newTab: false,
    },
    {
      href: "https://bsky.app/profile/amethystderg.bsky.social",
      src: "/icon_bsky.png",
      alt: "Bluesky icon",
      label: "Bluesky",
      newTab: true,
    },
    {
      href: "https://t.me/amethystderg",
      src: "/icon_telegram.png",
      alt: "Telegram icon",
      label: "Telegram",
      newTab: true,
    },
    {
      href: "https://www.twitch.tv/thatpurplederg",
      src: "/icon_twitch.png",
      alt: "Twitch icon",
      label: "Twitch",
      newTab: true,
    },
    {
      href: "https://www.tiktok.com/@amethyst_derg",
      src: "/icon_tiktok.png",
      alt: "TikTok icon",
      label: "TikTok",
      newTab: true,
    },
  ];

  return (
    // Background section
    <section
      className="min-h-screen overflow-hidden bg-amethystlight relative"
      role="main"
      aria-labelledby="page-title"
    >
      {/* Logo and AMETHYST text */}
      <div className="flex flex-row items-center justify-center relative z-20 px-4 pt-[clamp(1rem,2vw,2rem)] md:pt-0">
        <svg
          className="text-amethystdark text-[clamp(2.2rem,6vw,6rem)] tracking-[0.12em] sm:tracking-[0.24em] text-center inline-block translate-y-[clamp(0.8rem,1.6vw,1.5rem)] rotate-[-2.25deg] sm:rotate-0"
          style={{
            height: "1em",
            width: "auto",
            fontFamily: "TikTok Font",
            overflow: "visible",
          }}
          viewBox="0 -40 1400 280"
          role="img"
          aria-labelledby="amethyst-title"
          focusable="false"
        >
          <title id="amethyst-title">AMETHYST</title>
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
          className="w-[clamp(150px,24vw,420px)] h-auto p-1 sm:p-2 translate-x-0 sm:translate-x-[clamp(0.2rem,0.8vw,0.6rem)]"
        ></img>
      </div>
      {/* Circle background and DERG text*/}
      <div
        className="absolute left-1/2 -translate-x-1/2 aspect-square rounded-full bg-amethystdark border-white z-10 text-center top-[clamp(5.35rem,11.8vh,9.6rem)] sm:top-[clamp(12rem,25vh,28rem)]"
        style={{
          width: "clamp(900px,200vw,5760px)",
          borderWidth: "clamp(8px,1.8vw,20px)",
        }}
      >
        <svg
          className="text-amethystlight text-[clamp(2.2rem,6vw,6rem)] tracking-[0.12em] sm:tracking-[0.24em] inline-block -translate-x-9 sm:-translate-x-15 translate-y-[0.15rem] sm:-translate-y-0.5"
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
        <h1
          id="page-title"
          className="text-[clamp(1.75rem,3vw,3rem)] tracking-wider"
        >
          WEBSITE UNDER CONSTRUCTION
        </h1>
        <h2 className="mt-2 px-4 sm:px-0 text-[clamp(1rem,2.2vw,1.5rem)] tracking-widest">
          <span className="font-bold">...</span>but you can find me at the links
          below
          <span className="font-bold">!</span> Let’s chat
          <span className="font-bold">!</span>
        </h2>
      </div>
      {/* Links and Icons */}
      <div className="relative z-30 flex flex-row flex-wrap items-center justify-center mt-8 gap-3 sm:gap-5 w-full max-w-[min(40rem,90vw)] mx-auto">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.newTab ? "_blank" : undefined}
            rel={link.newTab ? "noreferrer noopener" : undefined}
            aria-label={
              link.newTab ? `${link.label} (opens in a new tab)` : link.label
            }
            className="w-[clamp(3rem,7vw,5rem)] h-[clamp(3rem,7vw,5rem)] flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
          >
            {brokenIcons[link.href] ? (
              <span className="text-[clamp(0.65rem,1.6vw,0.9rem)] font-semibold text-amethystlight">
                {link.label}
              </span>
            ) : (
              <img
                src={link.src}
                alt={link.alt}
                className="w-[clamp(2.6rem,6vw,4rem)] h-[clamp(2.6rem,6vw,4rem)] object-contain"
                onError={() =>
                  setBrokenIcons((prev) => ({ ...prev, [link.href]: true }))
                }
              />
            )}
            <span className="sr-only">{link.label}</span>
          </a>
        ))}
      </div>
      {/* Footer */}
      <div className="relative z-30 pt-8 text-center text-amethystlight">
        <p className="text-[clamp(0.8rem,1.4vw,1rem)] tracking-widest">
          © 2026 Amethyst Derg. All rights reserved.
        </p>
      </div>
      <div className="relative z-30 pt-8 text-center text-amethystlight">
        <p className="text-[clamp(0.7rem,1.2vw,0.9rem)] tracking-widest">
          Created by{" "}
          <a
            href="https://github.com/vienessewhirl"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            vienessewhirl
          </a>
          .
        </p>
      </div>
    </section>
  );
}
