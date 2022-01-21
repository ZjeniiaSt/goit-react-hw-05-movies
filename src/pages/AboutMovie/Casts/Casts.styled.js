import styled from 'styled-components';

export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 20px * 6) / 6);
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Photo = styled.img`
  width: 150px;
`;

export const ItemDescr = styled.p`
  padding: 10px;
`;

export const Name = styled.p`
  font-weight: 500;
  color: #1f1f1f;
`;
export const Character = styled.p`
  color: #505050;
`;
