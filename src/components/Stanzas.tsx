"use client";

import React from "react";
import { StaticImageData } from "next/image";
import SectionBlock from "@/components/SectionBlock";
import stanzas from "@/data/stanzas.json";

// Import images manually — must match keys used in JSON
import universeImg from "@/assets/universe.png";
import galaxyImg from "@/assets/galaxy.png";
import planetImg from "@/assets/planet.png";
import tortoiseImg from "@/assets/tortoise.png";
import lionImg from "@/assets/lion.png";
import octopusImg from "@/assets/octopus.png";
import slothImg from "@/assets/sloth.png";
import birdsImg from "@/assets/birds.png";
import humanImg from "@/assets/human.png";

const imageMap: Record<string, StaticImageData> = {
  "universe.png": universeImg,
  "galaxy.png": galaxyImg,
  "planet.png": planetImg,
  "tortoise.png": tortoiseImg,
  "lion.png": lionImg,
  "octopus.png": octopusImg,
  "sloth.png": slothImg,
  "birds.png": birdsImg,
  "human.png": humanImg,
};

const Stanzas: React.FC = () => {
  return (
    <>
      {stanzas.map((section) => (
        <SectionBlock
          key={section.id}
          image={imageMap[section.image]}
          alt={section.alt}
          flip={section.flip}
        >
          {section.text_lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </SectionBlock>
      ))}
    </>
  );
};

export default Stanzas;
