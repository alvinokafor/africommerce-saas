import { Footer } from './Footer';
import { NavBar } from './header/NavBar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  height: auto;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #333;
`;
const Children = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: 180px;
`;
export const Layout = (props) => {
  const location = useLocation();
  return (
    <Container>
      {location.pathname.includes('/admin') ? (
        <Children style={{ position: 'relative', top: '-170px' }}>
          {props.children}
        </Children>
      ) : (
        <div>
          <NavBar />
          <Children>{props.children}</Children>
          <Footer />
        </div>
      )}
    </Container>
  );
};
