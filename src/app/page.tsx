import Link from "next/link";
import { BiSend } from "react-icons/bi";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <section className="relative left-1/2 -translate-x-1/2 max-w-5xl min-h-screen px-16 py-48 flex justify-center flex-col gap-4">
        <div className="w-full flex justify-between mb-12">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-7xl mb-8">Cecilie Skogstad <br /> Gestaltterapi</h1>
            <h1 className="bg-[#d1c5c5] w-fit px-4 py-2 rounded-full flex items-center gap-2">
              <div className="bg-green-700 w-4 h-4 rounded-full p-1">
                <div className="w-full h-full aspect-square bg-green-600 rounded-full"></div>
              </div>
              Tiljengelig
            </h1>
          </div>
          <div className="w-16 h-16 md:w-48 md:h-48 bg-[#d1c5c5] rounded-xl"></div>
        </div>
        
        <div className="text-xl">Mulighet for online samtaler ved ønske.</div>

        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Ad eius esse reiciendis dolorem. Unde quia porro impedit, 
          laudantium iste dolore fuga assumenda quo labore nam at repellendus mollitia, 
          veniam expedita!
        </p>
      
        <Link 
          href="/kontakt" 
          className="w-fit inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg hover:bg-[#171717]/90 transition-colors"
        >
          <BiSend className="text-lg" />
          Book Time
        </Link>
      </section>

      <section className="w-full min-h-screen flex justify-center">
        <div className="max-w-5xl w-full flex flex-col px-16">
          <div className="w-full grid grid-cols-2 gap-12 mb-4">
            <Image 
              src="https://picsum.photos/1080/1440" 
              alt="Random decorative image"
              width={1080}
              height={1440}
              className="aspect-3/4 rounded-xl"
            />
            <div className="">
              <h2 className="text-2xl">Cecilie Skogstad</h2>
              <h3 className="">Gestaltterapeut</h3>
            </div>
            <div className="">
              <h2 className="text-2xl">Bolig Sted idk</h2>
              <h3 className="">HermanErKu</h3>
            </div>
            <Image 
              src="https://picsum.photos/1080/1440" 
              alt="Random decorative image"
              width={1080}
              height={1440}
              className="aspect-3/4 rounded-xl"
            />

          </div>

          <div className=""></div>
        </div>
      </section>
    </main>
  );
};