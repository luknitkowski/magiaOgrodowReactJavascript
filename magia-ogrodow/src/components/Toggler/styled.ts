import styled from 'styled-components';
import StyledTheme from '../../context/styledTheme';

export const ToggleContainer = styled.button`
  background: ${({ theme }: StyledTheme) => theme.gradient};
  border: 2px solid ${({ theme }: StyledTheme) => theme.toggleBorder};
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }: any) => theme.gradient};
  width: 5rem;
  height: 3rem;
  margin-left:auto;
  margin-right: 10px;
  border-radius: 30px;
  border: 2px solid ${({ theme }: any) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ lightTheme }: any) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }: any) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
// width: 8rem;
// height: 3.5rem;