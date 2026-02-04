// Temp Component
export default function Temp() {
  return (
    // Background section
    <section className="min-h-screen overflow-hidden bg-amethystlight">
      {/* Logo and Amethyst text */}
      <div className="flex items-center justify-center relative z-20">
        <p
          className="text-white text-8xl tracking-widest"
          style={{ fontFamily: "TikTok Font" }}
        >
          AMETHYST
        </p>
        <img
          src="/logo_base.png"
          alt="Amethyst Derg holding a sewing needle"
          className="w-1/4 h-1/4 p-2"
        ></img>
      </div>
      {/* Circle background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[200%] aspect-square rounded-full bg-amethystdark border-20 border-white z-10"></div>
    </section>
  );
}
