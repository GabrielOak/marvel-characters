import React from 'react';
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft';
import { ChevronRight } from '@styled-icons/material-rounded/ChevronRight';

import * as S from './styles';

const Pagination = ({ page, setPage, isPrevBttnDis, isNextBttnDis }) => {
  return (
    <S.Wrapper>
      <S.Button
        onClick={() => setPage(page - 1)}
        disabled={isPrevBttnDis}
        aria-label="Previous button"
      >
        <ChevronLeft />
      </S.Button>
      <span>{page}</span>
      <S.Button
        onClick={() => setPage(page + 1)}
        disabled={isNextBttnDis}
        aria-label="Next button"
      >
        <ChevronRight />
      </S.Button>
    </S.Wrapper>
  );
};

export default Pagination;
