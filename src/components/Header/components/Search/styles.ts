import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  
  div {
    width: 100%;

    display: flex;
    align-items: center;

    border-bottom: 1px solid white;

    padding: 5px;
    margin-bottom: 10px;

    input {
      flex: 1;
      background: ${colors.mediumPink};

      font-size: 34px;
      color: white;

      border: 0;

      padding: 5px 30px;

      ::placeholder {
        color: #991237
      }
    }

    svg {
      width: 60px;
      height: 60px
    }
  }
`;
