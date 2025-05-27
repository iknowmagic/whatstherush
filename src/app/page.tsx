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
import Background from "@/components/Background";

const Home: React.FC = () => {
  return (
    <main className="bg-light min-w-[320px] min-h-screen text-dark">
      <div className="container-responsive">
        <Hero />
        <SectionBlock
          image={universeImg}
          alt="Universe with galaxies and stars"
        >
          Not the center.
          <br />
          Never were.
          <br />
          Not the edge.
          <br />
          Just a speck of dust
          <br />
          in a bowl too big to hold.
        </SectionBlock>

        <SectionBlock image={galaxyImg} alt="Spiral galaxy" flip>
          Of all the spirals,
          <br />
          you ended up in this one.
          <br />
          A coincidence.
          <br />
          13 billion years
          <br />
          to make room for you.
        </SectionBlock>
        <SectionBlock image={planetImg} alt="Planet Earth">
          The earth takes its time.
          <br />
          Moss.
          <br />
          Rivers.
          <br />
          Hands.
          <br />
          You don&rsquo;t get that by hurrying.
        </SectionBlock>
        <SectionBlock image={tortoiseImg} alt="Tortoise" flip>
          the road
          <br />
          was the point
          <br />
          the whole time
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
          I could do everything.
          <br />
          But I don&rsquo;t.
        </SectionBlock>
        <SectionBlock image={slothImg} alt="Sloth">
          It was quiet at first.
          <br />
          Then someone ran.
          <br />
          Now no one remembers
          <br />
          what we were chasing.
        </SectionBlock>
        <SectionBlock image={birdsImg} alt="Flock of birds in flight" flip>
          I didn&rsquo;t know where I was going
          <br />
          but I wasn&rsquo;t alone
          <br />
          and that felt like direction
        </SectionBlock>
        <SectionBlock image={humanImg} alt="Human">
          Maybe I was never lost.
          <br />
          Just moving too fast
          <br />
          to recognize the story I was in.
        </SectionBlock>
      </div>
      <Background />
    </main>
  );
};

export default Home;
