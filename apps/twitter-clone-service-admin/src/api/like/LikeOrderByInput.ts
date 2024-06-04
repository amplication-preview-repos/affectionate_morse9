import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likedBy?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
};
