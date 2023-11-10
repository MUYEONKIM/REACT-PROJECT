import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getaccessToken";

// 리렌더링 되면 안되니, GLOBAL_STATE는 유지되게 캐시 유지
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const valueload = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void valueload.toPromise().then((newAccessToken) => {
      console.log("apollo가 실행됬어요");
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken ?? ""}`,
                },
              });
            }),
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
