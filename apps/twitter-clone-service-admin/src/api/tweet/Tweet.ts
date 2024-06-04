import { Like } from "../like/Like";

export type Tweet = {
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  updatedAt: Date;
};
