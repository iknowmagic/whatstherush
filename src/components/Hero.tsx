import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex items-center bg-dark md:p-12 lg:p-24 lg:p-lg px-6 h-hero desktop:h-hero tablet:h-hero">
      <h1 className="font-roboto-condensed text-light text-title desktop:text-title tablet:text-title text-left leading-tight">
        WHAT&rsquo;S THE
        <br />
        RUSH?
      </h1>
    </section>
  );
};

export default Hero;
