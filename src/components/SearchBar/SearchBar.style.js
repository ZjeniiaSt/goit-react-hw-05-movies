import styled from 'styled-components';

export const SearchbarSt = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const SearchFormSt = styled.form`
  display: flex;
  align-items: center;
  max-width: 400px;
  background-color: none;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  border: 5px solid #943b54;
  width: 100%;
  font: inherit;
  font-size: 20px;
  background-color: #997a8d;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
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
  &:hover,
  &:focus {
    color: #6e2e3f;
    text-transform: uppercase;
  }
`;
