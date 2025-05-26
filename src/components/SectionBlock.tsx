import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface SectionBlockProps {
  children: ReactNode;
  image: StaticImageData;
  alt: string;
  flip?: boolean;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  children,
  image,
  alt,
  flip = false,
}) => {
  const isDark = flip;

  return (
    <div
      className={`grid grid-cols-2 place-items-center h-[170px] w-full ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {/* TEXT */}
      <div
        className={`font-inconsolata leading-tight ${
          flip
            ? "order-2 justify-self-start pr-4"
            : "order-1 justify-self-end pl-4"
        }`}
      >
        {children}
      </div>

      {/* IMAGE */}
      <Image
        src={image}
        width={170}
        height={170}
        alt={alt}
        className={`object-cover ${flip ? "order-1" : "order-2"}`}
      />
    </div>
  );
};

export default SectionBlock;
