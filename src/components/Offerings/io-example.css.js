import styled from 'styled-components';
import { accent } from 'assets/sass/io-constant.css';

export const Container = styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 0.8s ease;

  background-color: ${({ isVisible }) => (isVisible ? accent : ' #333')};
`;
