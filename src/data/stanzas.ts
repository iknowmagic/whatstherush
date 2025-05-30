import universeImg from "@/assets/universe.png";
import galaxyImg from "@/assets/galaxy.png";
import planetImg from "@/assets/planet.png";
import tortoiseImg from "@/assets/tortoise.png";
import lionImg from "@/assets/lion.png";
import octopusImg from "@/assets/octopus.png";
import slothImg from "@/assets/sloth.png";
import birdsImg from "@/assets/birds.png";
import humanImg from "@/assets/human.png";
import type { StaticImageData } from "next/image";

export interface Stanza {
  id: string;
  text_lines: string[];
  image: StaticImageData;
  alt: string;
  flip?: boolean;
}

export const stanzas: Stanza[] = [
  {
    id: "s1",
    text_lines: [
      "Not the center.",
      "Never were.",
      "Not the edge.",
      "Just a speck of dust",
      "in a bowl too big to hold.",
    ],
    image: universeImg,
    alt: "Universe with galaxies and stars",
    flip: false,
  },
  {
    id: "s2",
    text_lines: [
      "Of all the spirals,",
      "you ended up in this one.",
      "A coincidence.",
      "13 billion years",
      "to make room for you.",
    ],
    image: galaxyImg,
    alt: "Spiral galaxy",
    flip: true,
  },
  {
    id: "s3",
    text_lines: ["The earth takes its time.", "Moss.", "Rivers.", "Hands."],
    image: planetImg,
    alt: "Planet Earth",
    flip: false,
  },
  {
    id: "s4",
    text_lines: ["the road", "was the point", "the whole time"],
    image: tortoiseImg,
    alt: "Tortoise",
    flip: true,
  },
  {
    id: "s5",
    text_lines: [
      "dust in the fur",
      "breath in the grass",
      "nothing else required",
    ],
    image: lionImg,
    alt: "Lion",
    flip: false,
  },
  {
    id: "s6",
    text_lines: ["I could do everything.", "But I don&rsquo;t."],
    image: octopusImg,
    alt: "Octopus",
    flip: true,
  },
  {
    id: "s7",
    text_lines: [
      "It was quiet at first.",
      "Then someone ran.",
      "Now no one remembers",
      "what we were chasing.",
    ],
    image: slothImg,
    alt: "Sloth",
    flip: false,
  },
  {
    id: "s8",
    text_lines: [
      "I didn&rsquo;t know where I was going",
      "but I wasn&rsquo;t alone",
      "and that felt like direction",
    ],
    image: birdsImg,
    alt: "Flock of birds in flight",
    flip: true,
  },
  {
    id: "s9",
    text_lines: [
      "Maybe I was never lost.",
      "Just moving too fast",
      "to recognize the story I was in.",
    ],
    image: humanImg,
    alt: "Human",
    flip: false,
  },
];
