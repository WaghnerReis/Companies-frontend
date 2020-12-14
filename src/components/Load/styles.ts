import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.whiteTwo06};
  position: absolute;

  div {
    width: 132px;
    height: 132px;

    border-radius: 50%;
    border: 16px solid transparent;
    border-top: 16px solid ${colors.greenyBlue};

    animation: ${rotate} 1.5s linear infinite;
  }
`;
