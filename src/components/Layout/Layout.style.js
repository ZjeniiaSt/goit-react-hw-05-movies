import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px black solid;
  padding: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  :not(:last-child) {
    margin-right: 5px;
  }
  &.active {
    color: #6e2e3f;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px;
  align-items: center;
`;
