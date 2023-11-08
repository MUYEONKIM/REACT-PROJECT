import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const todaylistState = atom({
  key: "todaylistState",
  default: [],
});

export const userInfo = atom({
  key: "userInfo",
  default: {
    email: "",
    name: "",
  },
});
