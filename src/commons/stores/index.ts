import { atom } from "recoil";

export const accessTokenState = atom({
  key : "accessTokenState",
  default : ""
})

export const userInfo = atom({
  key : "userInfo",
  default : {
    email: "",
    name: ""
  }
})