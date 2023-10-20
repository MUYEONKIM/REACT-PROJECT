import { useEffect } from "react"
import type { IQuery } from "../../../commons/types/generated/types"

export default function TodayList(data: string) {
    localStorage.setItem("todaylist", data)
}