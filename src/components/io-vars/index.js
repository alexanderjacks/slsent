import styled from 'styled-components';

// change these to match styleguide (can I import from styles.sass?)
const bgColorOnscreen = ' #0df '
const bgColorOffscreen = ' #333'

export const Container = styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #333;
  transition: background-color 2.8s ease
  ;

  background-color: ${({ isVisible }) => (isVisible ? bgColorOnscreen : bgColorOffscreen)};
`;
