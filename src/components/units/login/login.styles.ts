import styled from "@emotion/styled";

export const LoginWrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 950px;
  background-image: url('/backgroundImage/login_main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: saturate(70%);
`

export const LeftWrapper = styled.section`
  display: flex;
  flex-direction: column ;
  justify-content: center;
  width: 385px;
  height: auto;
  background-color: white;
  padding: 30px;
  `

export const LeftContents = styled.article`
  height: 30em;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 30px;
`
export const InputSpan = styled.span`
  margin-bottom: 10px;
`

export const Idbox = styled.input`
`

export const InputWrapper = styled.article`
  margin-bottom: 10px;
`