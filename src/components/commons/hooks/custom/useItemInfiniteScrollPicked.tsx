import type { IQuery } from "../../../../commons/types/generated/types";
import { useQueryFetchUseditemsPicked } from "../queries/useQueryFetchUseditemsPicked";

interface ReturnType {
  data: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
  onloadMore: () => void;
  count?: number;
}

export default function useItemInfiniteScrollPicked(): ReturnType {
  const { data, fetchMore } = useQueryFetchUseditemsPicked();
  const onloadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemsIPicked.length ?? 10) / 10) + 1,
        search: "",
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(prev, fetchMoreResult);
        if (fetchMoreResult?.fetchUseditemsIPicked === undefined)
          return {
            fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked],
          };
        return {
          fetchUseditemsIPicked: [
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ],
        };
      },
    });
  };

  return { data, onloadMore };
}
