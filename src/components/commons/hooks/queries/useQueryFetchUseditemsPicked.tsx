import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS_PICK = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
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
`;
export const useQueryFetchUseditemsPicked = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_PICK, {
    variables: {
      search: "",
    },
  });

  return query;
};
