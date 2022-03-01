import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  background-color: white;
  transition: transform 250ms;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border: 1px;
  }

  span {
    font-weight: 600;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;
