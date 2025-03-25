import Link from "next/link";

export const TjenesterButton = () => {
  return (
    <Link 
      href="/kontakt" 
      className="w-fit inline-flex items-center gap-2 px-6 py-3 border border-[#171717] text-#171717 rounded-lg hover:bg-[#171717]/30 transition-colors"
    >
      Se Tjenester
    </Link>
  );
};