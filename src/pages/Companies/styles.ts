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

export const CompaniesList = styled.ul`
  a {
    height: 213.9px;

    display: flex;

    border-radius: 4.7px;
    background-color: white;
    text-decoration: none;

    margin: 44px 51px 0 50px;
    padding: 27px 253.8px 26.9px 30.6px;

    img {
      width: 293px;
      height: 160px;
      margin: 0 38.4px 0 0;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    strong {   
      font-size: 30px;
      font-weight: bold;
      color: #1a0e49;

      margin-right: 27px;
    }

    span {
      font-size: 24px;
      color: #8d8c8c;

      margin: 10px 27px 0 0;
    }

    span + span {
      font-size: 18px;
    }
  }
`;
