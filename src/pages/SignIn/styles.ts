import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 295px;
      height: 72px;
      
      margin: 0 26px 0px 3.4px;
    }

    strong {
      width: 176px;
      height: 64px;

      font-size: 24px;
      text-align: center;
      color: ${colors.charcoalGrey};

      margin: 67px 91px 20.5px 57.4px;
    }

    span {
      width: 357.7px;
      height: 52px;

      line-height: 1.44;
      letter-spacing: -0.25px;
      text-align: center;
      color: ${colors.charcoalGrey};

      margin: 20.5px 2.1px 20px 0;
    }

    p {
      font-size: 12.2px;
      line-height: 1.95;
      letter-spacing: -0.17px;
      text-align: center;
      color: ${colors.red};
    }
  }
`;
