import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="place-items-center lg:min-h-screen lg:grid relative">
      <video
        src="/herovid.mp4"
        loop
        autoPlay={true}
        muted
        className="-z-10 absolute hidden md:grid md:max-w-screen"
      />
      <video
        src="/herovid2.mp4"
        loop
        autoPlay={true}
        muted
        className="lg:-z-30 lg:absolute md:hidden  md:w-[50%] h-[50%]"
      />
      <div className="max-w-7xl mx-auto text-center justify-center absolute top-36 lg:top-80 px-4 md:top-24">
        <h1 className="lg:text-7xl text-4xl font-extrabold text-white">
          Wear the look. Own the moment.
        </h1>
        <p className="text-gray-100 mt-4 lg:text-2xl text-lg font-semibold w-[90%] mx-auto">
          Redefining streetwear with bold designs and fearless confidence.
          Crafted for trendsetters, inspired by the streets, and made for those
          who dare to stand out. Wear the look, own the moment.
        </p>
        <Link href={"/collection"}>
          <Button
            variant={"outline"}
            className="mt-16 text-lg px-8 py-2 text-white bg-zinc-900 hover:bg-zinc-800 hover:text-gray-300"
          >
            See more
          </Button>
        </Link>
      </div>
    </div>
  );
}
