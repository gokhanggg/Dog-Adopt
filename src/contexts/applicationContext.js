import React, {
  createContext, useContext, useState, useEffect
} from 'react';
import { element } from 'prop-types';
import { getAllFilters, filter, getAllDogs } from '../api';

const ApplicationContext = createContext({ });

export const useApplicationContext = () => useContext(ApplicationContext);

const ApplicationContextProvider = ({
  children
}) => {
  const [dogsToShow, setDogsToShow] = useState([]);

  const [ageFilterOptions, setAgeFilterOptions] = useState(null);
  const [cityFilterOptions, setCityFilterOptions] = useState(null);
  const [genderFilterOptions, setGenderFilterOptions] = useState(null);

  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]); 

  const onAgeFilterChange = values => {
    setSelectedAges(values);
  };

  const onCityFilterChange = values => {
    setSelectedCities(values);
  };

  const onGenderFilterChange = values => {
    setSelectedGenders(values);
  };

  const normalizeSelectedData = data => (
    data.map(({ value }) => value)
  );

  const onFilterClick = async () => {
    const filteredDogsResponse = await filter(normalizeSelectedData(selectedAges), normalizeSelectedData(selectedCities), normalizeSelectedData(selectedGenders));
    const { data: { content } = {}} = filteredDogsResponse;
    setDogsToShow(content);
  };

  useEffect(() => {
    getAllFilters().then(res => {
      const { ageFilterOptions, cityFilterOptions, genderFilterOptions } = res.data.content;
      setAgeFilterOptions(ageFilterOptions);
      setCityFilterOptions(cityFilterOptions);
      setGenderFilterOptions(genderFilterOptions);
  })}, [])

  useEffect(() => {
    getAllDogs().then(res => {
      setDogsToShow(res.data.content);
  })}, [])

  const value = {
    ageFilterOptions,
    cityFilterOptions,
    genderFilterOptions,
    selectedAges,
    selectedCities,
    selectedGenders,
    onAgeFilterChange,
    onCityFilterChange,
    onGenderFilterChange,
    onFilterClick,
    dogsToShow
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

ApplicationContextProvider.propTypes = {
  children: element
}

export default ApplicationContextProvider;
