import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeCreateInput = {
  likedBy?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
