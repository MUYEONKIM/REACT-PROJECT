import { ApolloClient, ApolloLink , ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from 'react'
interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [ accessToken, setAccessToken ] = useRecoilState(accessTokenState);
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers : {
      Authorization : `Bearer ${accessToken}`
    }
  });

  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") ?? "")
    }
  })

  const client = new ApolloClient({
    link: ApolloLink.from([ uploadLink as unknown as ApolloLink ]),
    cache: new InMemoryCache(),
  });

  return(
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  );
}