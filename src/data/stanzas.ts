import { stanzaGroups } from "./stanzaGroups";

// Import all images
import universe from "@/assets/universe.png";
import galaxy from "@/assets/galaxy.png";
import planet from "@/assets/planet.png";
import tortoise from "@/assets/tortoise.png";
import lion from "@/assets/lion.png";
import octopus from "@/assets/octopus.png";
import sloth from "@/assets/sloth.png";
import birds from "@/assets/birds.png";
import human from "@/assets/human.png";

const imageMap = {
  universe,
  galaxy,
  planet,
  tortoise,
  lion,
  octopus,
  sloth,
  birds,
  human,
};

// Pick one group
const group = stanzaGroups[Math.floor(Math.random() * stanzaGroups.length)];

export const stanzas = group.data.map((stanza, i) => ({
  ...stanza,
  id: `s${i + 1}`,
  image: imageMap[stanza.theme as keyof typeof imageMap],
  flip: i % 2 === 1,
}));
