"use client";

import React from "react";
import Hero from "@/components/Hero";
import SectionBlock from "@/components/SectionBlock";
import universeImg from "@/assets/universe.png";
import galaxyImg from "@/assets/galaxy.png";
import planetImg from "@/assets/planet.png";
import tortoiseImg from "@/assets/tortoise.png";
import lionImg from "@/assets/lion.png";
import octopusImg from "@/assets/octopus.png";
import slothImg from "@/assets/sloth.png";
import birdsImg from "@/assets/birds.png";
import humanImg from "@/assets/human.png";

const Home: React.FC = () => {
  return (
    <main className="bg-light min-w-[320px] min-h-screen text-dark">
      <div className="container-responsive">
        <Hero />
        <SectionBlock
          image={universeImg}
          alt="Universe with galaxies and stars"
        >
          the universe has come a long way
          <br />
          and still doesn&rsquo;t know where it&rsquo;s going
          <br />
          maybe that&rsquo;s okay
        </SectionBlock>
        <SectionBlock image={galaxyImg} alt="Spiral galaxy" flip>
          it&rsquo;s not that we&rsquo;re small
          <br />
          it&rsquo;s that nothing else is trying to be big
        </SectionBlock>
        <SectionBlock image={planetImg} alt="Planet Earth">
          it moves without urgency
          <br />
          and somehow it all works
        </SectionBlock>
        <SectionBlock image={tortoiseImg} alt="Tortoise" flip>
          we&rsquo;ll get there eventually
          <br />
          the scenery is better this way
        </SectionBlock>
        <SectionBlock image={lionImg} alt="Lion">
          dust in the fur
          <br />
          breath in the grass
          <br />
          nothing else required
        </SectionBlock>
        <SectionBlock image={octopusImg} alt="Octopus" flip>
          I once wrote a novel in ink
          <br />
          no one noticed
          <br />
          which is how I like it
        </SectionBlock>
        <SectionBlock image={slothImg} alt="Sloth">
          speed is useful
          <br />
          until you forget what for
        </SectionBlock>
        <SectionBlock image={birdsImg} alt="Flock of birds in flight" flip>
          I didn&rsquo;t know where I was going
          <br />
          but I wasn&rsquo;t alone
          <br />
          and that felt like direction
        </SectionBlock>
        <SectionBlock image={humanImg} alt="Human">
          I didn&rsquo;t know where I was going
          <br />
          but I wasn&rsquo;t alone
          <br />
          and that felt like direction
        </SectionBlock>
      </div>
    </main>
  );
};

export default Home;
