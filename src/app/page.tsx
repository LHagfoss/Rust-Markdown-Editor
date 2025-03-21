import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <section className="relative left-1/2 -translate-x-1/2 max-w-5xl min-h-screen p-16 py-48 flex justify-center flex-col gap-4">
        <h1 className="text-5xl">Cecilie Skogstad, Gestaltterapaut</h1>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Ad eius esse reiciendis dolorem. Unde quia porro impedit, 
          laudantium iste dolore fuga assumenda quo labore nam at repellendus mollitia, 
          veniam expedita!
        </p>
      
        <Link href="/kontakt" className="p-3 px-5 bg-[#d1c5c5] rounded-xl w-fit">Book Time</Link>  
      </section>
    </main>
  );
};