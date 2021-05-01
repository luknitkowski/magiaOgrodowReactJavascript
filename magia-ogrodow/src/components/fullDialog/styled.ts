import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";

export const StyledDialog = styled(Dialog)`
    position: relative;
    max-height: 100vh;

    @media only screen and (max-width:400px) {
        .MuiDialog-paperFullScreen{
            display: flex;
            justify-content: center;
            align-items: center;
        }
      }

    button, span {
        color: #05386B;
    }
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute;
    right: 20px;
    top: 10px;
    color: grey;
    z-index: 3;
`;