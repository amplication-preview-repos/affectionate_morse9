import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
