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
      className={`flex w-full h-section tablet:h-section desktop:h-section ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {flip && (
        <div className="flex justify-start items-center pl-1 desktop:pl-6 tablet:pl-4 h-full">
          <Image
            src={image}
            width={170}
            height={170}
            alt={alt}
            className="w-image desktop:w-image tablet:w-image h-image desktop:h-image tablet:h-image object-cover"
          />
        </div>
      )}

      <div
        className={`flex flex-1 items-center${!flip ? " pl-4 tablet:pl-6 desktop:pl-8" : " pr-4 tablet:pr-6 desktop:pr-8"}`}
      >
        <div className="max-w-[200px] desktop:max-w-[400px] tablet:max-w-[300px] font-inconsolata text-body desktop:text-body tablet:text-body leading-[1.2em]">
          {children}
        </div>
      </div>

      {!flip && (
        <div className="flex justify-end items-center pr-1 desktop:pr-6 tablet:pr-4 w-image desktop:w-image tablet:w-image h-full">
          <Image
            src={image}
            width={170}
            height={170}
            alt={alt}
            className="w-image desktop:w-image tablet:w-image h-image desktop:h-image tablet:h-image object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default SectionBlock;
