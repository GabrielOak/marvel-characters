import styled from 'styled-components';
import media from 'styled-media-query';
import Theme from '../Theme';

export const Card = styled.main`
  width: 20rem;
  border-radius: 10px;
  margin: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: transform 250ms;
  cursor: pointer;
  ${media.lessThan('medium')`
    width: 9rem;
  `};

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 20rem;
  background-color: ${Theme.lightGray};
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 10px;

  ${media.lessThan('medium')`
    height: 9rem;
  `};
`;

export const InfoContainer = styled.div`
  display: flex;
  border-radius: 0 0 10px 10px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h3`
  color: ${Theme.white};
  text-align: center;
`;
