// Temp Component
export default function Temp() {
  return (
    // Background section
    <section className="min-h-screen overflow-hidden bg-amethystlight">
      {/* Logo and Amethyst text */}
      <div className="flex flex-col md:flex-row items-center justify-center relative z-20 px-4 pt-8 md:pt-0">
        <p
          className="text-white text-4xl sm:text-6xl md:text-8xl tracking-widest text-center"
          style={{ fontFamily: "TikTok Font" }}
        >
          AMETHYST
        </p>
        <img
          src="/logo_base.png"
          alt="Amethyst Derg holding a sewing needle"
          className="w-2/3 sm:w-1/2 md:w-1/4 h-auto p-2"
        ></img>
      </div>
      {/* Circle background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 md:top-1/4 w-[300%] sm:w-[250%] md:w-[200%] aspect-square rounded-full bg-amethystdark border-8 md:border-20 border-white z-10"></div>
    </section>
  );
}
