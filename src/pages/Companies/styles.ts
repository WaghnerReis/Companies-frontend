import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  
  div {  
    display: flex;
    align-items: center;
      
    p {
    width: 100%;

    font-size: 32px;
    line-height: 1.22;
    letter-spacing: -0.45px;
    text-align: center;

    color: ${colors.charcoalGrey}
    }

    & + div {
      height: 100%;
    }
  }
`;
