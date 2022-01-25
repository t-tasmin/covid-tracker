import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';
import './CountryPicker.css'

const CountryPicker = (props) => {
  const [countries, setCountries] =useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    }
    
    fetchAPI();
    
     
  },[ ]);

  const countryselect = countries.length?
  (countries.map((country,i) =>
    <option key={i} value={country}>{country}</option>))
  :null
  
  return (
    <FormControl  className="formControl">
      <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e.target.value)} >
        <option value="">Global</option>
        {countryselect}
      </NativeSelect>
    </FormControl>
  );
 
}

export default CountryPicker;