import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropdownWithGroup from '../../src/components/DropdownWithGroup';
import { CustomOptionRenderer, CustomDropdownTogglerRenderer } from '../../src/testComponents/DropdownWithGroup';
import { dummyDropdownData } from '../../src/applicationData/dropdownWithGroup/DropdownWithGroupDummyData';
const searchInputTestID = 'dropdownWG-search-input';

let getByTestId;
let getByText;
let getByPlaceholderText;
let queryByText;
let queryByPlaceholderText;
let getAllByText;

const defaultProps = {
  data: dummyDropdownData,
  onChange: f => f,
  useGroup: true
};

const renderDropdownWithGroupComponent = (props = {}) => {
  const mergedProps = { ...defaultProps, ...props };
  const renderObj = render(<DropdownWithGroup {...mergedProps} />);
  getByTestId = renderObj.getByTestId;
  getByText = renderObj.getByText;
  getByPlaceholderText = renderObj.getByPlaceholderText;
  queryByText = renderObj.queryByText;
  queryByPlaceholderText = renderObj.queryByPlaceholderText;
  getAllByText = renderObj.getAllByText;
};

test('should call onChange with written input', () => {
  const onChangeMock = jest.fn();
  const props = { onChange: onChangeMock };
  renderDropdownWithGroupComponent(props);

  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);
  const searchInput = getByTestId(searchInputTestID);

  fireEvent.change(searchInput, { target: { value: 'b' } });
  expect(onChangeMock).toHaveBeenCalledTimes(1);
  const firstCallArgument = onChangeMock.mock.calls[0][0];
  expect(firstCallArgument).toBe('b');

  fireEvent.change(searchInput, { target: { value: 'bas' } });
  expect(onChangeMock).toHaveBeenCalledTimes(2);
  const secondCallArgument = onChangeMock.mock.calls[1][0];
  expect(secondCallArgument).toBe('bas');
});

test('should call onOptionClick with given group and option data', () => {
  const onOptionClickMock = jest.fn();
  const props = { onOptionClick: onOptionClickMock };
  renderDropdownWithGroupComponent(props);

  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);

  const adanaOption = getByText('Adana');
  fireEvent.click(adanaOption);
  expect(onOptionClickMock).toHaveBeenCalledTimes(1);

  const firstCallArguments = onOptionClickMock.mock.calls[0];
  const firstCallFirstArgument = firstCallArguments[0];
  const firstCallSecondArgument = firstCallArguments[1];
  expect(firstCallFirstArgument).toBe('Adana');
  expect(firstCallSecondArgument).toBe('Akdeniz');

  fireEvent.click(dropdownToggler);

  const istanbulOption = getByText('İstanbul');
  fireEvent.click(istanbulOption);
  expect(onOptionClickMock).toHaveBeenCalledTimes(2);

  const secondCallArguments = onOptionClickMock.mock.calls[1];
  const secondCallFirstArgument = secondCallArguments[0];
  const secondCallSecondArgument = secondCallArguments[1];
  expect(secondCallFirstArgument).toBe('İstanbul');
  expect(secondCallSecondArgument).toBe('Marmara');
});

test('should use selected group/option as dropdown toggler text with useSelectedToggleText prop as true', () => {
  const props = { useSelectedAsToggleText: true };
  renderDropdownWithGroupComponent(props);

  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);

  const adanaOption = getByText('Adana');
  fireEvent.click(adanaOption);

  const dropDownTogglerNull = queryByText('select');
  expect(dropDownTogglerNull).toBe(null);

  getByText('Akdeniz / Adana');
});

test('defaultToggleText prop should work', () => {
  const defaultToggleText = 'default toggle test';
  const props = { defaultToggleText };
  renderDropdownWithGroupComponent(props);

  getByText(defaultToggleText);
  expect(queryByText('select')).toBe(null);
});

test('inputPlaceHolder prop should work', () => {
  const inputPlaceholder = 'input placeholder test';
  const props = { inputPlaceholder };
  renderDropdownWithGroupComponent(props);

  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);

  getByPlaceholderText(inputPlaceholder);
  expect(queryByPlaceholderText('Search')).toBe(null);
});

test('should dropdown display none on optionClick', () => {
  renderDropdownWithGroupComponent();

  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);

  const dropdownWrapper = document.querySelector('.dropdownWG-wrapper');
  const isCloseFalse = dropdownWrapper.classList.contains('isClose');
  fireEvent.click(getByText('Ankara'));
  const isCloseTrue = dropdownWrapper.classList.contains('isClose');

  expect(isCloseFalse).toBe(false);
  expect(isCloseTrue).toBe(true);
});

test('should render header prop as component', () => {
  const headerText = 'custom header component';
  const Header = () => (
    <div>
      {headerText}
    </div>
  );
  const props = { header: <Header /> };
  renderDropdownWithGroupComponent(props);

  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);

  getByText(headerText);
});

test('should render header prop as text', () => {
  const headerText = 'custom header component';
  const props = { header: headerText };
  renderDropdownWithGroupComponent(props);

  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);

  getByText(headerText);
});

test('should call onOptionClick with CustomOptionRenderer prop', () => {
  const onOptionClickMock = jest.fn();
  const props = { onOptionClick: onOptionClickMock, OptionRenderer: CustomOptionRenderer };
  renderDropdownWithGroupComponent(props);

  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);

  getAllByText('İç Anadolu');
  getByText('Ankara');
  const ankaraOption = getByTestId('Ankara');
  fireEvent.click(ankaraOption);

  expect(onOptionClickMock).toHaveBeenCalledTimes(1);
  const call = onOptionClickMock.mock.calls[0];
  const callFirstArgument = call[0];
  const callSecondArgument = call[1];

  expect(callFirstArgument).toBe('İç Anadolu');
  expect(callSecondArgument).toBe('Ankara');
});

test('should open dropdown with the DropdownTogglerRenderer prop', () => {
  const defaultToggleText = 'default toggle text';
  const componentAddCustomToEnd = `${defaultToggleText} custom`;
  const props = { defaultToggleText, DropdownTogglerRenderer: CustomDropdownTogglerRenderer };
  renderDropdownWithGroupComponent(props);

  const dropdownClose = document.querySelector('.dropdownWG-wrapper.isClose')
  expect(dropdownClose).not.toBeNull();

  const dropdownToggler = getByText(componentAddCustomToEnd);

  fireEvent.click(dropdownToggler);
  const dropdownCloseNull = document.querySelector('.dropdownWG-wrapper.isClose')
  expect(dropdownCloseNull).toBeNull();

});

test('should render all the options and in the data', () => {
  renderDropdownWithGroupComponent();
  const dropdownToggler = getByText('select');
  fireEvent.click(dropdownToggler);
  dummyDropdownData.forEach(({ optionGroup, options }) => {
    getByText(optionGroup);
    options.forEach(option => {
      getByText(option);
    });
  });
});