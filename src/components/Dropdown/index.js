import React from 'react';

import * as S from './styles';

const Dropdown = ({ options }) => (
  <S.Select data-testid="select-input">
    {!!options &&
      options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
  </S.Select>
);

export default Dropdown;
