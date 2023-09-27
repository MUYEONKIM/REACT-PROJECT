import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

export const FETCH_ITEM_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      pickedCount
      images
      createdAt
    }
  }
` 
export const useQueryFetchUseditemsOfTheBest = () => {
  const query = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">, IQueryFetchUseditemsArgs>(
    FETCH_ITEM_BEST
  );

  return query;
};
