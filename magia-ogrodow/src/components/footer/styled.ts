import styled from "styled-components";
import StyledTheme from '../../context/styledTheme';

export const FooterBlock = styled.footer`
  background-color: ${({ theme }: StyledTheme) => theme.lightColorGradient};
  text-align: center;
`;

export const FooterIMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: -40px;
`;

export const FooterMainBlock = styled.div`
  margin-bottom: 40px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 650px) {
    display: block;
  }
`;

export const FooterCopyright = styled.div`
  text-align: center;
  padding: 20px;
  border-top: 1px solid gray;
`;