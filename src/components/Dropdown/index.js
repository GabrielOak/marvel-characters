import React from 'react';

import * as S from './styles';

const Dropdown = ({ options, value, setValue }) => (
  <S.Select
    data-testid="select-input"
    value={value}
    onChange={(event) => setValue(event.target.value)}
  >
    {!!options &&
      options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.name}
        </option>
      ))}
  </S.Select>
);

export default Dropdown;
