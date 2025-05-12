import Link from "next/link";
import { FC } from "react";

const Author: FC = () => {
  return (
    <div className="mt-20">
      <Link
        href="https://t.me/bakhodir_abdullaev"
        target="_blank"
        className="block text-center text-sm text-[#a9a05c] font-serif italic underline"
      >
        by Abdullaev
      </Link>
    </div>
  );
};

export default Author;
