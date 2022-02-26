import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  background-color: white;
  width: 15rem;
  height: 2.5rem;
  border-radius: 10px;
  margin: 10px;

  svg {
    width: 2rem;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 80%;
  font-size: 18px;
  outline: none;
  border: none;
`;
