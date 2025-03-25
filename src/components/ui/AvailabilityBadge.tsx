export const AvailabilityBadge = () => {
  const checkBusinessHours = () => {
    const now = new Date();
    const utcHours = now.getUTCHours();
    
    const utcPlusOneHours = (utcHours + 1) % 24;
    
    if (utcPlusOneHours >= 8 && utcPlusOneHours < 16) {
        return true;
    }
    
    return false;
  };

  const isBusinessHours = checkBusinessHours();

  if (isBusinessHours) {
    return (
      <h1 className="bg-[#d1c5c5] w-fit px-4 py-2 rounded-full flex items-center gap-2">
        <div className="bg-green-700 w-4 h-4 rounded-full p-1">
          <div className="w-full h-full aspect-square bg-green-600 rounded-full"></div>
        </div>
        Tilgjengelig
      </h1>
    );
  }

  return (
    <h1 className="bg-[#d1c5c5] w-fit px-4 py-2 rounded-full flex items-center gap-2">
      <div className="bg-red-700 w-4 h-4 rounded-full p-1">
        <div className="w-full h-full aspect-square bg-red-600 rounded-full"></div>
      </div>
      Ikke tilgjengelig
    </h1>
  );
};