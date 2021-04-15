import React from 'react';
import { string, func } from 'prop-types';

const CustomOptionRenderer = ({
  optionGroup,
  option,
  onOptionClick
}) => (
  <div
    onClick={() => onOptionClick(optionGroup, option)}
    onKeyDown={f => f}
    data-testid={option}
  >
    <span>{option}</span>
    <span>{optionGroup}</span>
  </div>
);

CustomOptionRenderer.propTypes = {
  optionGroup: string.isRequired,
  option: string.isRequired,
  onOptionClick: func.isRequired
};

export default CustomOptionRenderer;
