import styled, { keyframes } from "styled-components";

const downLogo = keyframes`
  0% { -webkit-transform: scale(1); opacity: 0.5 }
  100% { -webkit-transform: scale(1.5); opacity: 1 }
`;

export const StyledLoader = styled.div`
  width:100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-animation: ${downLogo} 1s infinite alternate ease-in-out;
`;