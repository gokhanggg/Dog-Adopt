import React, { useState, useRef } from 'react';
import {
  node, func, string, arrayOf, shape, oneOfType, bool
} from 'prop-types';
import TetherComponent from 'react-tether';
import DefaultOptionRenderer from './optionRenderer';
import DefaultDropdownTogglerRenderer from './dropdownTogglerRenderer';
import '../../styles/_dropdownWithGroup.scss';
import { useClickOutsideState } from '../../hooks';

const DropdownWithGroupOption = ({
  header,
  onChange,
  inputPlaceholder,
  data,
  onOptionClick,
  OptionRenderer,
  DropdownTogglerRenderer,
  defaultToggleText,
  useSelectedAsToggleText,
  useGroup
}) => {
  const containerRef = useRef();
  const targetRef = useRef();
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useClickOutsideState(false, [containerRef, targetRef]);
  const [selectedOption, setSelectedOption] = useState(defaultToggleText);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onValueChange = ({ target: { value } }) => {
    setSearchValue(value);
    onChange(value);
  };

  const DropdownTogglerRendererComp = DropdownTogglerRenderer ? DropdownTogglerRenderer : DefaultDropdownTogglerRenderer;

  const onOptionClickHandler = (option, group) => {
    setIsDropdownOpen(false);
    setSelectedOption(useGroup ? `${group} / ${option}` : option);
    onOptionClick(option, group);
  };

  const renderList = () => {
    const OptionRendererComp = OptionRenderer ? OptionRenderer : DefaultOptionRenderer;

    if (useGroup) {
      return data.map(({ optionGroup, options }) => (
        <div key={optionGroup} className='dropdownWG-list-group-wrapper'>
          <div className='dropdownWG-list-group-name-wrapper'>
            <div className='dropdownWG-list-group-name-item'>{optionGroup}</div>
          </div>
          <div className='dropdownWG-list-option-wrapper'>
            {options.map(option => (
              <OptionRendererComp
                onOptionClick={onOptionClickHandler}
                optionGroup={optionGroup}
                option={option}
                key={optionGroup + option}
              />
            ))}
          </div>
        </div>
      ));
    }

    return data.map((option) => (
      <OptionRendererComp
        onOptionClick={onOptionClickHandler}
        optionGroup={null}
        option={option}
        key={option}
      />
    ));
    
  };

  return (
    <TetherComponent
      targetAttachment='bottom right'
      attachment='top right'
      className='dropdownWG-popover'
      constraints={[{
        to: 'window',
        attachment: 'together',
        pin: true
      }]}
    >
      <DropdownTogglerRendererComp
        ref={containerRef}
        text={useSelectedAsToggleText ? selectedOption : defaultToggleText}
        onClick={toggleDropdown}
      />
      <div
        ref={targetRef}
        className={`dropdownWG-wrapper ${isDropdownOpen ? '' : 'isClose'}`}
      >
        {header}
        <div className='dropdownWG-input-wrapper'>
          <input
            type='text'
            value={searchValue}
            onChange={onValueChange}
            placeholder={inputPlaceholder}
            className='dropdownWG-search-input'
            data-testid='dropdownWG-search-input'
          />
        </div>
        <div className='dropdownWG-list-wrapper'>
          {renderList()}
        </div>
      </div>
    </TetherComponent>
  );
};

DropdownWithGroupOption.propTypes = {
  header: oneOfType([node, string]),
  OptionRenderer: node,
  DropdownTogglerRenderer: node,
  onChange: func.isRequired,
  inputPlaceholder: string,
  data: arrayOf(shape({
    optionGroup: string,
    options: arrayOf(string)
  })),
  onOptionClick: func,
  defaultToggleText: string,
  useSelectedAsToggleText: bool,
  useGroup: bool
};

DropdownWithGroupOption.defaultProps = {
  header: null,
  OptionRenderer: null,
  DropdownTogglerRenderer: null,
  inputPlaceholder: 'Search',
  data: [],
  onOptionClick: f => f,
  defaultToggleText: 'select',
  useSelectedAsToggleText: true,
  useGroup: false
};

export default DropdownWithGroupOption;
