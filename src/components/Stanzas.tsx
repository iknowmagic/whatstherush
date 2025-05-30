"use client";

import React from "react";
import SectionBlock from "@/components/SectionBlock";
import { stanzas } from "@/data/stanzas";

const Stanzas: React.FC = () => {
  return (
    <>
      {stanzas.map((section) => (
        <SectionBlock
          key={section.id}
          image={section.image}
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
