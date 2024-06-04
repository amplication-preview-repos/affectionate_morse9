import { Tweet } from "../tweet/Tweet";

export type Like = {
  createdAt: Date;
  id: string;
  likedBy: string | null;
  tweet?: Tweet | null;
  updatedAt: Date;
};
