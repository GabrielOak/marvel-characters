import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  margin-left: 16px;
`;
