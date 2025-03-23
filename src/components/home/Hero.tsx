import { AvailabilityBadge } from "../ui/AvailabilityBadge";
import { BookButton } from "../ui/BookButton";

export const Hero = () => {
  return (
    <section className="relative left-1/2 -translate-x-1/2 max-w-5xl min-h-screen px-4 md:px-16 py-48 flex justify-center flex-col gap-4">
        <div className="flex flex-col mb-12">
          <h1 className="text-4xl md:text-7xl mb-8">Cecilie Skogstad <br /> Gestaltterapi</h1>
          <AvailabilityBadge />
        </div>
      
      <div className="text-xl">Mulighet for online samtaler ved ønske.</div>

      <p className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ad eius esse reiciendis dolorem. Unde quia porro impedit, 
        laudantium iste dolore fuga assumenda quo labore nam at repellendus mollitia, 
        veniam expedita!
      </p>
    
      <BookButton />
    </section>
  );
};