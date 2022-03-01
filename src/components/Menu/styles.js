import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  display: flex;
  align-items: center;
  padding: 10px 0;
  background-color: black;
  margin: 0px;
`;

export const Logo = styled.img`
  width: 120px;
  height: 50px;
  margin-left: 10px;

  ${media.lessThan('medium')`
    width: 90px;
    height: 35px;
  `}
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  margin-left: 16px;

  ${media.lessThan('medium')`
    font-size: 20px;
  `}
`;
