import { Outlet } from 'react-router-dom';
import { Header, StyledNavLink, Section } from './Layout.style';

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
        <Section>
          <Outlet />
        </Section>
      </main>
    </>
  );
};

export default Layout;
