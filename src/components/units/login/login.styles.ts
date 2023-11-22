import styled from "@emotion/styled";

export const LoginWrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  min-height: 950px;
  background-image: url("/backgroundImage/background_main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /* filter: saturate(70%); */
`;

export const LeftWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 385px;
  height: auto;
  background-color: white;
  padding: 30px;
`;

export const LeftContents = styled.article`
  height: 30em;
  display: flex;
  flex-direction: column;
  padding: 25% 30px 25% 30px;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
  border-radius: 10px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 32px;
  margin-bottom: 10%;
`;

export const LinkA = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;

export const InputP = styled.p`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Idbox = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const InputWrapper = styled.article`
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.3em;
`;

export const LoginButton = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #fa6400;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
`;
