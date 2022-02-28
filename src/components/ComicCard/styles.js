import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  margin-bottom: 10px;
  background-color: white;
  width: 20vw;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const Image = styled.img`
  width: 100%;
  margin: 0px;
`;

export const InfoContainer = styled.div`
  width: 96%;
  background-color: white;
  padding: 2%;
  margin: 0px;

  h2 {
    margin: 0px;
  }
`;

export const DescriptionContainer = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
