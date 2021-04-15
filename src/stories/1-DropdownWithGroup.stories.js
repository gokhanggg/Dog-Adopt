import React, { useState } from 'react';
import DropdownWithGroup from '../components/DropdownWithGroup';
import { dummyDropdownData } from '../applicationData/dropdownWithGroup/DropdownWithGroupDummyData';

export const DropdownWithGroupStory = () => {
  const [dataToShow, setDataToShow] = useState(dummyDropdownData);
  const onSearch = (value) => {
    if (!value) setDataToShow(dummyDropdownData);

    const filteredZones = dummyDropdownData.filter(({ options }) => (
      options.find(option => option.toLowerCase().includes(value.toLowerCase()))
    ));

    const filteredData = filteredZones.map(({ optionGroup, options }) => (
      {
        optionGroup: optionGroup,
        options: options.filter(option => option.toLowerCase().includes(value.toLowerCase()))
      }
    ));

    setDataToShow(filteredData);
  }

  return (
    <DropdownWithGroup
      data={dataToShow}
      useGroup={true}
      onChange={onSearch}
    />
  )
};

const exportObj = { title: 'DropdownWithGroup' };

export default exportObj;
