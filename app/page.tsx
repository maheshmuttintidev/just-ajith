import Image from "next/image";
import Mainimage from "../public/brand_banner.png";
import CaptainAmericaShield from "../public/captain_america_shield.png";
import Celebrate from "../public/celebrate_1.jpg";

export default function Home() {
  return (
    <main className="container mx-auto items-center">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-5xl text-white my-3 font-bold">July 27, 2000</h1>
        <h2 className="text-3xl text-yellow-500 bg-yellow-100 px-3 py-2 mb-3">
          25 years man, you got to believe it
        </h2>
      </div>
      <div className="relative flex justify-center items-center">
        <Image
          src={Mainimage}
          width={1020}
          height={400}
          className="object-contain"
          priority
          alt="just ajith banner image"
        />
        <div className="absolute top-0 left-[70%]">
          <Image
            src={CaptainAmericaShield}
            width={120}
            height={120}
            className="object-contain"
            priority
            alt="just ajith banner image"
          />
        </div>
        <div className="absolute top-12 left-[50%]">
          <Image
            src={Celebrate}
            width={60}
            height={60}
            className="object-cover"
            priority
            alt="just ajith banner image"
          />
        </div>
      </div>
    </main>
  );
}
