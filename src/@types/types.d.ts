import { Video } from "../features/videos/vidoes";

export type VideoItemProps = {} & Video;

export type Sponser = {
  id: string;
  title: string;
  description: string;
  img: string;
  url: string;
};

export type SponserProps = {} & Sponser;
