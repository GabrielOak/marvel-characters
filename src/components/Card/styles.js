import styled from 'styled-components';
import media from 'styled-media-query';
import Theme from '../Theme';

export const Card = styled.main`
  width: 18rem;
  border-radius: 10px;
  margin: 16px;
  background-color: white;
  transition: transform 250ms;
  cursor: pointer;
  ${media.lessThan('medium')`
    width: 8rem;
  `};

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 18rem;
  background-color: ${Theme.lightGray};
  background-image: url(${(props) => props.img});
  background-size: cover;

  svg {
    padding: 8px;
  }

  svg:hover {
    color: yellow;
  }

  ${media.lessThan('medium')`
    height: 8rem;
  `};
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h3`
  color: black;
  text-align: center;
`;
