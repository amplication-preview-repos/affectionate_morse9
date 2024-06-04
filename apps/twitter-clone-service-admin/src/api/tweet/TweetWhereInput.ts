import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  likes?: LikeListRelationFilter;
};
