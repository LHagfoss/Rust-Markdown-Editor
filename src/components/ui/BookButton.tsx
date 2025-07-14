import Link from "next/link";
import { BiSend } from "react-icons/bi";

export const BookButton = () => {
  return (
    <Link 
      href="/kontakt" 
      className="w-fit inline-flex items-center gap-2 px-6 py-3 bg-[var(--textDark)] text-[var(--textLight)] rounded-lg hover:bg-[var(--textDark)]/90 transition-colors"
    >
      <BiSend className="text-lg" />
      Book Time
    </Link>
  );
};