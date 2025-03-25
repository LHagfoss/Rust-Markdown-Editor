import Image from "next/image";

export const About = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-5xl w-full flex flex-col px-4 md:px-16">
        <Image 
          src="https://picsum.photos/1080/1080" 
          alt="Random decorative image"
          width={1080}
          height={1080}
          className="aspect-square max-w-xs rounded-xl mb-4"
        />
        <div className="">
          <h2 className="text-2xl">Cecilie Skogstad</h2>
          <h3 className="text-lg">Gestaltterapeut</h3>
        </div>
      </div>
    </section>
  );
};