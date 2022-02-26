import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  background-color: white;
  width: 15rem;
  height: 2.5rem;
  border-radius: 10px;
  margin: 10px;

  ${media.lessThan('medium')`
      width: 13rem;
      height: 2rem;
  `}

  svg {
    width: 2.3rem;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;

    ${media.lessThan('medium')`
      width: 2rem;
  `}

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 90%;
  font-size: 16px;
  outline: none;
  border: none;
`;
