import styled, { keyframes } from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import StyledTheme from '../../context/styledTheme';

export const PlantNurseryContainer = styled.div`
`;

export const PlantNurseryBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding: 40px;
  background-color: ${({ theme }: StyledTheme) => theme.lightColorGradient};
`;

export const PlantNurserySubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const TypeOfFlora = styled.div`
  border-bottom: 1px solid rgb(198, 198, 198);
  border-padding: 50px;
  padding: 40px;
`;

export const SubTypeOfFlora = styled.div`
  max-width: 1000px;
  margin: auto;

  ul {
    list-style-type: none;
  }
`;

export const PlantNurseryInfoToScrollDown = styled.div`
  background-color: ${({ theme }: StyledTheme) => theme.lightColorGradient};
  align-items: center;
  padding: 40px;
  border-top: 1px solid rgb(198, 198, 198);
  text-align: center;

  p {
    font-size: 20px;
    text-align: center;
  }
`;

export const StyledIconButton = styled(IconButton)`
  width: 100px;
  height: 100px;
`;

const downarrow = keyframes`
  0% { -webkit-transform: translateY(0); opacity: 0.4 }
  100% { -webkit-transform: translateY(0.4em); opacity: 0.9 }
`;

export const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
-webkit-animation: ${downarrow} 0.6s infinite alternate ease-in-out;
`;