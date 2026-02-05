// React
import { useState } from "react";

// Components
import TempHero from "./TempHero";

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
    // Page wrapper
    <section className="temp-page" role="main" aria-labelledby="page-title">
      {/* Hero block */}
      <TempHero />

      <div className="temp-stack">
        {/* Construction notice */}
        <div
          className="temp-construction"
          style={{ fontFamily: "TikTok Font" }}
        >
          <h1 id="page-title" className="temp-title">
            WEBSITE UNDER CONSTRUCTION
          </h1>
          <h2 className="temp-subtitle">
            <span className="font-bold">...</span>but you can find me at the
            links below
            <span className="font-bold">!</span> Let’s chat
            <span className="font-bold">!</span>
          </h2>
        </div>
        {/* Social links */}
        <div className="temp-links">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noreferrer noopener" : undefined}
              aria-label={
                link.newTab ? `${link.label} (opens in a new tab)` : link.label
              }
              className="temp-link"
            >
              {brokenIcons[link.href] ? (
                <span className="temp-link-text">{link.label}</span>
              ) : (
                <img
                  src={link.src}
                  alt={link.alt}
                  className="temp-link-icon"
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
        <div className="temp-footer">
          <p className="temp-footer-text">
            © 2026 Amethyst Derg. All rights reserved.
          </p>
        </div>
        <div className="temp-footer">
          <p className="temp-footer-text-secondary">
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
      </div>
    </section>
  );
}
