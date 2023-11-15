import { useQueryFetchUseditems } from "../queries/useQueryFetchUseditems";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

interface ReturnType {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  onloadMore: () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  count?: number;
}

export default function useItemInfiniteScroll(): ReturnType {
  const { data, fetchMore, refetch } = useQueryFetchUseditems();

  const onloadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(prev, fetchMoreResult);
        if (fetchMoreResult?.fetchUseditems === undefined)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return { data, onloadMore, refetch };
}
