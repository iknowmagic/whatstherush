import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface SectionBlockProps {
  children?: ReactNode;
  image?: StaticImageData;
  alt?: string;
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
      className={`grid justify-center items-center h-[170px] sm:h-[220px] w-full ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      } ${image ? (flip ? "grid-cols-[170px_1fr] sm:grid-cols-[220px_1fr]" : "grid-cols-[1fr_170px] sm:grid-cols-[1fr_220px]") : "grid-cols-[1fr]"}`}
    >
      {/* IMAGE */}
      {flip && image && (
        <div className="w-[170px] sm:w-[220px] h-[170px] sm:h-[220px] shrink-0">
          <Image
            src={image}
            width={220}
            height={220}
            alt={alt || ""}
            className="w-full h-full object-cover"
            sizes="(min-width: 768px) 220px, 170px"
          />
        </div>
      )}

      {/* TEXT */}
      {children && (
        <div
          className={`px-6 text-sm sm:text-lg md:text-2xl font-inconsolata leading-tight ${flip ? "text-left" : "text-right"} `}
        >
          {children}
        </div>
      )}

      {/* IMAGE */}
      {!flip && image && (
        <div className="w-[170px] sm:w-[220px] h-[170px] sm:h-[220px] shrink-0">
          <Image
            src={image}
            width={220}
            height={220}
            alt={alt || ""}
            className="w-full h-full object-cover"
            sizes="(min-width: 768px) 220px, 170px"
          />
        </div>
      )}
    </div>
  );
};

export default SectionBlock;
