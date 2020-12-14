import styled from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles';

export const Container = styled.button`
  width: 324px;
  height: 52.8px;

  color: white;
  font-weight: bold;
  text-align: center;

  border: 0;
  border-radius: 3.6px;
  
  background-color: ${colors.greenyBlue};
  transition: background-color 0.2s;
  
  margin: 46.3px 11px 0 24.9px;
  padding: 14.4px 126.7px 14.4px 127.3px;

  &:hover {
    background: ${shade(0.2, `${colors.greenyBlue}`)}
  }
`;
