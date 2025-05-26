import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface SectionBlockProps {
  children: ReactNode;
  image: StaticImageData;
  flip?: boolean; // flip implies dark mode and image on the left
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  children,
  image,
  flip = false,
}) => {
  const isDark = flip;

  return (
    <div
      className={`grid grid-cols-2 h-sm w-full ${
        isDark ? "bg-dark text-light" : "bg-light text-black"
      }`}
    >
      {/* TEXT SIDE */}
      <div
        className={`flex items-center w-[180px] ${flip ? "order-2 pr-5" : "pl-5"}`}
      >
        <div className="font-inconsolata text-sm leading-snug">{children}</div>
      </div>

      {/* IMAGE SIDE */}
      <div
        className={`flex items-center justify-center w-sm h-sm ${
          flip ? "order-1" : ""
        }`}
      >
        <Image
          src={image}
          width={170}
          height={170}
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SectionBlock;
