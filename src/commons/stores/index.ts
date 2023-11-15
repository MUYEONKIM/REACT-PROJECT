import { atom, selector } from "recoil";
import type { IUseditem } from "../types/generated/types";
import { getAccessToken } from "../libraries/getaccessToken";
import { v1 } from "uuid";

export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: "",
});

export const todaylistState = atom<IUseditem[]>({
  key: `todaylistState/${v1()}`,
  default: [],
});

export const userInfo = atom({
  key: `userInfo/${v1()}`,
  default: {
    email: "",
    name: "",
  },
});

export const restoreAccessTokenLoadable = selector({
  key: `restoreAccessTokenLoadable/${v1()}`,
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
