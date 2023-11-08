import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";
import { Modal } from "antd";

export const withAuth =
  (Component: any) =>
  (props: any): any => {
    const router = useRouter();
    const loadValue = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
      console.log(loadValue);
      void loadValue.toPromise().then((newAccessToken) => {
        console.log(newAccessToken);
        if (newAccessToken === undefined) {
          Modal.error({ content: "로그인 후 이용가능합니다." });
          void router.push("/");
        }
      });
    }, []);
    return <Component {...props} />;
  };
