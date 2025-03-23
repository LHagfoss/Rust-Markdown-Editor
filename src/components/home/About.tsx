import Image from "next/image";

export const About = () => {
  return (
    <section className="w-full min-h-screen flex justify-center">
      <div className="max-w-5xl w-full flex flex-col px-4 md:px-16">
        <div className="w-full grid grid-cols-2 gap-4 md:gap-12 mb-4">
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
      </div>
    </section>
  );
};