import { Outlet } from 'react-router-dom';
import { Header, StyledNavLink, Container } from './Layout.style';
const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledNavLink to="/">HOME</StyledNavLink>
          <StyledNavLink to="/movies">MOVIES</StyledNavLink>
        </nav>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export { Layout };
