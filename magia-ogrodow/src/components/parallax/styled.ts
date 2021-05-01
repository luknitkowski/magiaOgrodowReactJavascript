import styled from "styled-components";

type PropsType = {
  image: any
}

export const ParallaxBlock = styled.div`
  background-image: url(${(props: PropsType) => props.image});
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-device-width: 1366px) {
    .parallax {
      background-attachment: scroll;
    }
  }
`;

export const Header = styled.h1`
  -webkit-text-stroke: 1px #3f51b5;
`;