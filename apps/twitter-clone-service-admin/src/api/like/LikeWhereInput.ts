import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  likedBy?: StringNullableFilter;
  tweet?: TweetWhereUniqueInput;
};
