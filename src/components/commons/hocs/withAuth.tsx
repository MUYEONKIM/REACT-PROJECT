import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  // useRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import {
  // accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { Modal } from "antd";

export const withAuth =
  (Component: any) =>
  (props: any): any => {
    // const [accessToken] = useRecoilState(accessTokenState);
    const router = useRouter();
    const valueload = useRecoilValueLoadable(restoreAccessTokenLoadable);
    useEffect(() => {
      void valueload.toPromise().then((newAccessToken) => {
        if (newAccessToken === "") {
          Modal.error({ content: "로그인 후 이용가능합니다." });
          void router.push("/");
        }
      });
    }, []);
    return <Component {...props} />;
  };
