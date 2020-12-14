import styled from 'styled-components';
import { colors } from '../../styles';


export const Container = styled.div`
  width: 351px;

  display: flex;
  flex-direction: column;
  
  margin-top: 20.5px;

  div {
    display: flex;
    align-items: center;

    border-bottom: 0.7px solid ${colors.charcoalGrey};

    padding: 5px;
    margin-bottom: 10px;
  }

  svg {
    width: 22px;
    height: 22px;

    color: ${colors.mediumPink}
  }

  input + svg {
    color: ${colors.red}
  }

  input { 
    flex: 1;
    background: #ebe9d7;
    border: 0;

    padding: 5px 10px;
  }

  p {
    font-size: 12.2px;
    line-height: 1.95;
    letter-spacing: -0.17px;
    text-align: center;
    color: ${colors.red};
  }
`;
