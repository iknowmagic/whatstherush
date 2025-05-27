import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex items-center bg-dark px-6 h-[150px] sm:h-[200px] md:h-[250px]">
      <h1 className="font-roboto-condensed text-light text-4xl sm:text-6xl md:text-7xl text-left leading-tight">
        WHAT&rsquo;S THE
        <br />
        RUSH?
      </h1>
    </section>
  );
};

export default Hero;
