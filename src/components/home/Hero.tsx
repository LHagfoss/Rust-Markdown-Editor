import { AvailabilityBadge } from "../ui/AvailabilityBadge";
import { BookButton } from "../ui/BookButton";
import { TjenesterButton } from "../ui/TjenesterButton";

export const Hero = () => {
  return (
    <section className="relative left-1/2 -translate-x-1/2 max-w-5xl min-h-screen px-4 md:px-16 py-48 flex justify-center flex-col gap-4">
        <div className="flex flex-col mb-12">
          <h1 className="text-4xl md:text-7xl mb-8">Cecilie Skogstad <br /> Gestaltterapi</h1>
          <AvailabilityBadge />
        </div>
      
      <h2 className="text-2xl">Trenger du noen å snakke med?</h2>

      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Nihil a magnam assumenda labore ad debitis explicabo cum iure excepturi! 
        Voluptate quod minus velit quibusdam odit.
      </p>
    
      <div className="flex gap-4">
        <BookButton />
        <TjenesterButton />
      </div>
    </section>
  );
};