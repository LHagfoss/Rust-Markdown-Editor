import Link from "next/link";

export const TjenesterButton = () => {
  return (
    <Link 
      href="/kontakt" 
      className="w-fit inline-flex items-center gap-2 px-6 py-3 border border-[var(--textDark)] text-[var(--textDark)] rounded-lg hover:bg-[--textDark]/30 transition-colors"
    >
      Se Tjenester
    </Link>
  );
};