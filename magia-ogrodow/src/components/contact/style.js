import styled, { keyframes } from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export const ContactBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding: 40px;
  background-color: #e6e6e6;
`;

export const ContactSubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
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

export const BlockWithMap = styled.div`
  padding-bottom: 80px;
  padding-top: 80px;
`;