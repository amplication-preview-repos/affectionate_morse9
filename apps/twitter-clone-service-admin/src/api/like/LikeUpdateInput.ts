import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeUpdateInput = {
  likedBy?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
