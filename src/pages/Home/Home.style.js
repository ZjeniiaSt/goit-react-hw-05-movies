import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

export const Item = styled.li`
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms linear;
  padding: 20px;
  &:hover,
  focus {
    transform: scale(1.03);
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  margin-bottom: 10px;
  width: 250px;
`;
