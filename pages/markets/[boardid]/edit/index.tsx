import { useRouter } from "next/router";
import { useQueryFetchUseditem } from "../../../../src/components/commons/hooks/queries/useQueryFetchUseditem";
import { useCheckId } from "../../../../src/components/commons/hooks/custom/useCheckId";
import UsedItemWrite from "../../../../src/components/units/goods/write/UsedItem.index";

export default function BoardEditPage(): JSX.Element {
  const {id} = useCheckId("boardid");
  const { data } = useQueryFetchUseditem({ useditemId : id});
  const router = useRouter()
  if (typeof router.query.boardid !== 'string') return <></>

  return <UsedItemWrite isEdit={true} data={data}/>
  
}