import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  width: 100%;
  height: 151px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${colors.mediumPink};

  padding: 0 40px 0;

  img {
    width: 234.2px;
    height: 57px;
  }

  svg {
    width: 60px;
    height: 60px;

    color: white;
  }
`;
