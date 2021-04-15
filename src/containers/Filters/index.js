import React from 'react';
import Select from 'react-select';
import ResponsiveLayout from '../../components/ResponsiveLayout';
import { useApplicationContext } from '../../contexts/applicationContext';

const customStyles = {
  container: base => ({
    ...base,
    position: 'relative',
    margin: 10
  }),
  control: base => ({
    ...base,
    height: 45,
    overflow: 'auto',
    width: 250
  }),
  indicatorsContainer: base => ({
    ...base,
    position: 'absolute',
    right: 0,
    top: 5,
    backgroundColor: 'white'
  }),
  valueContainer: base => ({
    ...base,
    maxWidth: 180
  }),
  placeholder: base => ({
    ...base,
    fontFamily: 'Jost'
  })
};

const Filters = () => {
  const {
    ageFilterOptions,
    cityFilterOptions,
    genderFilterOptions,
    onAgeFilterChange,
    onCityFilterChange,
    onGenderFilterChange,
    onFilterClick
  } = useApplicationContext();
  
  const renderSelectOption = ({
    options,
    isMulti=true,
    styles=customStyles,
    placeholder,
    onChange
  }) => (
    <Select
      classNamePrefix='list'
      options={options}
      isMulti={isMulti}
      styles={styles}
      placeholder={placeholder}
      onChange={onChange}
    />
  )

  return (
    <ResponsiveLayout>
      {ageFilterOptions && (
        renderSelectOption({
          options: ageFilterOptions,
          placeholder: 'Age',
          onChange: onAgeFilterChange
        })
      )}

      {cityFilterOptions && (
        renderSelectOption({
          options: cityFilterOptions,
          placeholder: 'City',
          onChange: onCityFilterChange
        })
      )}

      {genderFilterOptions && (
        renderSelectOption({
          options: genderFilterOptions,
          placeholder: 'Gender',
          onChange: onGenderFilterChange
        })
      )}

      <button className='primary-button filter' onClick={onFilterClick}>Filter</button>
    </ResponsiveLayout>
  )
}

export default Filters;