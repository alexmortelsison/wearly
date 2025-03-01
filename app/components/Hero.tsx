export default function Hero() {
  return (
    <div className="relative min-h-screen w-full grid place-items-center text-center">
      <video
        autoPlay
        loop
        muted
        src="/herovid.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      ></video>
      <div className="max-w-7xl px-6">
        <h1 className="text-white text-6xl font-extrabold leading-tight">
          Wear the look. Own the moment.
        </h1>
        <p className="text-lg leading-snug mt-2 text-muted-foreground">
          Redefining streetwear with bold designs and fearless confidence.
          Crafted for trendsetters, inspired by the streets, and made for those
          who dare to stand out. Wear the look, own the moment.
        </p>
      </div>
    </div>
  );
}
