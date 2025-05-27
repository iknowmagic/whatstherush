import SectionBlock from "./SectionBlock";

const Background = () => {
  return (
    <div className="top-0 left-0 z-[-1] absolute w-full h-full">
      <div className="bg-dark w-full h-[150px] sm:h-[200px] md:h-[250px]"></div>
      <SectionBlock />
      <SectionBlock flip />
      <SectionBlock />
      <SectionBlock flip />
      <SectionBlock />
      <SectionBlock flip />
      <SectionBlock />
      <SectionBlock flip />
      <SectionBlock />
    </div>
  );
};

export default Background;
