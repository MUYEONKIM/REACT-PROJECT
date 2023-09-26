import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int, $search: String) {
    fetchUseditems(isSoldout:$isSoldout, page: $page, search: $search) {
      _id
      name
      remarks
      createdAt
      price
      tags
      images
      pickedCount
    }
  }
` 
export const useQueryFetchUseditems = () => {
  const query = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USED_ITEMS
  );

  return query;
};
