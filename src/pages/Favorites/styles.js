import styled from 'styled-components';
import media from 'styled-media-query';
import Theme from '../../components/Theme';

export const Wrapper = styled.main`
  margin: 0;
`;

export const Container = styled.div`
  padding-left: 3%;
  padding-right: 3%;
`;

export const HeaderContainer = styled.div`
  color: ${Theme.black}; 
  border-left: 0.7rem solid ${Theme.red}};
  padding-left: 5px;
  margin-left: 3%;

  & h1 {
    margin-top: 15px;
    color: white;
    ${media.lessThan('medium')`
      font-size: 24px;
    `}
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 95%;

  ${media.lessThan('medium')`
    justify-content: center;
    width: 100%;
  `}
`;

export const CardsContainer = styled.div`
  display: flex;
  padding-top: 60px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${media.lessThan('medium')`
    padding-top: 20px;
  `}
`;
