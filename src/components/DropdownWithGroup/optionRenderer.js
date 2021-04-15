import React, { useCallback } from 'react';
import { string, func } from 'prop-types';

const DropdownOptionRenderer = ({
  optionGroup,
  option,
  onOptionClick
}) => {
  const optionClickFunction = useCallback(() => {
    onOptionClick(option, optionGroup);
  }, [optionGroup, option, onOptionClick]);

  return (
    <div
      className='dropdownWG-list-option-item-wrapper'
      onClick={optionClickFunction}
      onKeyDown={f => f}
    >
      <div className='dropdownWG-list-option-item'>
        {option}
      </div>
    </div>
  );
};

DropdownOptionRenderer.propTypes = {
  optionGroup: string.isRequired,
  option: string.isRequired,
  onOptionClick: func.isRequired
};

export default DropdownOptionRenderer;
