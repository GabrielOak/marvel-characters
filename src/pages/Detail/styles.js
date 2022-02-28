import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 20vw;
  ${media.lessThan('medium')`
    width: 90vw;
  `}
`;

export const Banner = styled.div`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 40vw;
  padding: 13px;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;

  ${media.lessThan('medium')`
    width: 86vw;
    padding: 2vw;
  `}

  h1 {
    margin: 5px;
  }

  p {
    margin: 5px;
  }
`;

export const MetricsContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    p {
      margin: 5px;
      font-size: 13px;
    }
  `}
`;

export const Separator = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 16px;
  width: 2px;
`;

export const ComicsContainer = styled.div`
  column-count: 3;
  width: 60vw;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1.2rem;

  h2 {
    font-size: 20px;
  }

  ${media.lessThan('medium')`
    column-count: 1;
    width: 100%;

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }
  `}
`;
