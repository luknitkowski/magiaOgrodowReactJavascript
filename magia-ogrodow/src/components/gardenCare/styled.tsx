import styled from "styled-components";
import StyledTheme from '../../context/styledTheme';

export const GardenCareContainer = styled.div`
`;
export const GardenCareBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding: 40px;
  background-color: ${({ theme }: StyledTheme) => theme.lightColorGradient};
`;

export const GardenCareSubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const GardenCareExamplesExamples = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 50px;

  ul {
    list-style-type: none;
  }
  li {
    margin: 20px;
  }
`;