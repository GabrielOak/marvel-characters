import styled from 'styled-components';
import media from 'styled-media-query';

export const Select = styled.select`
  border-radius: 10px;
  width: 8rem;
  height: 2.5rem;
  font-size: 16px;

  ${media.lessThan('medium')`
      width: 6rem;
      height: 2rem;
  `}
`;
