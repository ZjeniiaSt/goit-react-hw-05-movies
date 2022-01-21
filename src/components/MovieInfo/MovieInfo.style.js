import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

export const Button = styled.button`
  display: block;
  color: #6e2e3f;
  border-radius: 28px;
  outline: 0;
  border: 4px solid #943b54;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  background: #997a8d;
  padding: 7px 20px 7px 20px;
  margin-left: 4px;
  margin: 20px;
  &:hover,
  &:focus {
    color: #6e2e3f;
    text-transform: uppercase;
  }
`;

export const BaseInfo = styled.div`
  display: flex;
  padding: 10px;
`;

export const Poster = styled.img`
  width: 400px;
`;

export const Description = styled.div`
  padding-left: 30px;
`;

export const Title = styled.h2`
  padding-bottom: 15px;
`;

export const Subtitle = styled.h3`
  padding-top: 15px;
  padding-bottom: 5px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: #6e2e3f;
    text-decoration: underline;
  }
`;
