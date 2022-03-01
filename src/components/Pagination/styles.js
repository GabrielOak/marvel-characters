import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin-bottom: 2rem;

  span {
    font-size: 20px;
    font-weight: 600;
    color: white;
  }
`;

export const Button = styled.button`
  width: 3.5rem;
  border-radius: 50%;
  border: none;
  color: white;
  background-color: transparent;
  cursor: pointer;

  :disabled {
    color: grey;
  }
`;
