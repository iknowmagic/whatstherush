import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface SectionBlockProps {
  children: ReactNode;
  image: StaticImageData;
  alt: string; // Alt text for the image
  flip?: boolean; // flip=true means image on left, flip=false means image on right
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
      className={`flex w-full h-sm md:h-md lg:h-lg ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {/* When flip=true, image comes first (left side) */}
      {flip && (
        <div className="flex justify-start items-center pl-1 h-full">
          <Image
            src={image}
            width={170}
            height={170}
            alt={alt}
            className="md:w-[200px] lg:w-[240px] md:h-[200px] lg:h-[240px] object-cover"
          />
        </div>
      )}

      {/* TEXT SIDE - remaining space */}
      <div className={`flex flex-1 items-center` + (!flip ? " pl-4" : " pr-4")}>
        <div className="font-inconsolata md:text-md text-sm lg:text-lg leading-[1.2em]">
          {children}
        </div>
      </div>

      {/* When flip=false, image comes second (right side) */}
      {!flip && (
        <div className="flex justify-end items-center pr-1 w-sm md:w-md lg:w-lg h-full">
          <Image
            src={image}
            width={170}
            height={170}
            alt={alt}
            className="md:w-[200px] lg:w-[240px] md:h-[200px] lg:h-[240px] object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default SectionBlock;
