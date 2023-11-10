import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { Modal } from "antd";

export const withAuth =
  (Component: any) =>
  (props: any): any => {
    const router = useRouter();
    const valueload = useRecoilValueLoadable(restoreAccessTokenLoadable);
    const [accessToken] = useRecoilState(accessTokenState);
    useEffect(() => {
      void valueload.toPromise().then((newAccessToken) => {
        console.log("withAuth가 실행됬어요");
        // console.log(accessToken, newAccessToken);
        if (newAccessToken === undefined) {
          Modal.error({ content: "로그인 후 이용가능합니다." });
          void router.push("/");
        }
      });
    }, []);
    return <Component {...props} />;
  };
