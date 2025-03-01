import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid place-items-center min-h-screen">
      <video
        src="/herovid.mp4"
        loop
        autoPlay={true}
        muted
        className="-z-10 absolute"
      />
      <div className="max-w-7xl mx-auto text-center justify-center">
        <h1 className=" text-6xl font-extrabold text-white">
          Wear the look, own the moment,
        </h1>
        <p className="text-gray-100 mt-4 text-2xl font-semibold">
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
