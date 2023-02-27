import { Sponser } from "../@types/types";
import pepsiPic from "../images/pepsiPic.jpg";
import mcDonaldsPic from "../images/mcDonaldsPic.jpg";
import deltaPic from "../images/deltaPic.jpg";
import nikePic from "../images/nikePic.jpg";
import { v4 } from "uuid";

export const sponsers: Sponser[] = [
  {
    id: v4(),
    title: "Pepsi",
    description: "Pepsi is a carbonated soft drink manufactured by PepsiCo.",
    img: pepsiPic,
    url: "https://www.pepsi.com/",
  },
  {
    id: v4(),
    title: "McDonalds",
    description:
      "McDonald's Corporation is an American multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.",
    img: mcDonaldsPic,
    url: "https://www.mcdonalds.com/us/en-us",
  },
  {
    id: v4(),
    title: "Delta",
    description:
      "Delta Air Lines is one of the major airlines of the United States and a legacy carrier. One of the world's oldest airlines in operation.",
    img: deltaPic,
    url: "https://www.delta.com/",
  },
  {
    id: v4(),
    title: "Nike",
    description:
      "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
    img: nikePic,
    url: "https://www.nike.com/",
  },
];
