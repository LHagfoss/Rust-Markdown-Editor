import Link from "next/link";
import { BiSend } from "react-icons/bi";

export const BookButton = () => {
  return (
    <Link 
      href="/kontakt" 
      className="w-fit inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white rounded-lg hover:bg-[#171717]/90 transition-colors"
    >
      <BiSend className="text-lg" />
      Book Time
    </Link>
  );
};