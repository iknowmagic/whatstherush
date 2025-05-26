import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex items-center bg-dark px-6 h-title-sm md:h-title-md lg:h-title-lg">
      <h1 className="font-robotoCondensed text-light text-title-sm md:text-title-md lg:text-title-lg text-left leading-tight">
        WHAT&rsquo;S THE
        <br />
        RUSH?
      </h1>
    </section>
  );
};

export default Hero;
