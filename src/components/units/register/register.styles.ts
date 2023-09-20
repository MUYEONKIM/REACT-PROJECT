import styled from "@emotion/styled";

export const RegisterWrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 950px;
  justify-content: flex-end;
  background-image: url('/backgroundImage/login_main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: saturate(70%);
`

export const RightWrapper = styled.section`
  display: flex;
  flex-direction: column ;
  justify-content: center;
  width: calc( 100vw - 385px );
  height: auto;
  background-color: white;
  padding: 30px;
  `

export const RightContents = styled.article`
  width : 25em;
  height: 30em;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 30px;
`
export const InputP = styled.p`
  margin-bottom: 10px;
`
export const InputWrapper = styled.article`
  margin-bottom: 10px;
`

export const Idbox = styled.input`
`

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.3em;
`
