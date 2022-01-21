import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px black solid;
  padding: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  :not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    color: #6e2e3f;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

export const Section = styled.section`
  padding: 60px, 0;
`;
