import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { WEATHER_API_KEY, } from "../../api";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: 'none',
    minHeight: '45px',
    color: 'white',
    '&:hover': {
      border: '1px solid rgba(255, 255, 255, 0.5)',
    }
  }),
  input: (provided) => ({
    ...provided,
    color: 'white',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'rgba(255, 255, 255, 0.7)',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
    backdropFilter: 'blur(5px)',
    borderRadius: '10px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    color: 'white',
    padding: '10px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  }),
};

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {

    if (!inputValue) {
      return Promise.resolve({ options: [] });
    }

    return fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.map((city) => ({
            value: `${city.lat} ${city.lon}`,
            label: `${city.name}, ${city.country} ${city.state ? `(${city.state})` : ''}`,
          })),
        };
      })
      .catch((err) => {
        console.error(err);
        return { options: [] };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
    />
  );
};

export default Search;
