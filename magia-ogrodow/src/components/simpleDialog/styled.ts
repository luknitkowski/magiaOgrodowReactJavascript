import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";

export const StyledDialog = styled(Dialog)`
    position: relative;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute;
    right: 20px;
    top: 10px;
    color: grey;
    z-index: 3;
`;

