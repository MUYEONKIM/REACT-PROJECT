import { useRouter } from "next/router"

export const useCheckId = (ID: string) => {
  const router = useRouter();
  const queryID = router.query[ID]
  if(!queryID) return { id: ""};
  if(typeof queryID === "string") return { id: queryID };
  if(typeof queryID === "object") return { id: queryID[0] };
  return { id: ""}
}
