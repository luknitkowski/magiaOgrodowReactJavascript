import styled from "styled-components";
import StyledTheme from '../../context/styledTheme';

export const ProjectBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding: 40px;
  background-color: ${({ theme }: StyledTheme) => theme.lightColorGradient};

  div {
    max-width: 1000px;
    margin: auto;
  }
`;

export const ProjectListAndExamples = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 50px;
  display: flex;

  ul {
    list-style-type: none;
  }
  li {
    margin: 20px;
  }

@media only screen and (max-width: 560px) {
  display: block;
}
`;

export const BlockWithMovie = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;
  border-top: 1px solid #c6c6c6;

  iframe {
    border-radius: 10px;
    margin: auto;
    width:560px;
    height:315px;
  }

  @media only screen and (max-width: 560px) {
    iframe {
      border-radius: 10px;
      margin: auto;
      width:95vw;
      height:315px;
    }
  }
`;