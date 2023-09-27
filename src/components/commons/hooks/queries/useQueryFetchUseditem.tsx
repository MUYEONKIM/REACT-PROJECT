import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        _id
        email
        name
      }
      soldAt
      createdAt
    }
  }
`;

export const useQueryFetchUseditem = (variables: IQueryFetchUseditemArgs) => {
  const query = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
    variables
  });

  return query;
};
