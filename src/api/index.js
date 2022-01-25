import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

  let countryUrl = url;

  if (country) {
    countryUrl = `${url}/countries/${country}`;
  }

  try {
    const response = await axios.get(countryUrl);
    // We can directly save in {data} instead of response
    // and use data instead of response.data

    const modifiedData = {
      confirmed:response.data.confirmed,
      recovered:response.data.recovered,
      deaths:response.data.deaths,
      lastUpdate:response.data.lastUpdate
    };
    return modifiedData;
  } catch (error){
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);
    
    // response.data is array of objects, create another array of objects
    const modifiedData= response.data.map((data)=> {
       return {confirmed: data.confirmed.total, deaths: data.deaths.total, date: data.reportDate};
    });
    return modifiedData;
  } catch (error){
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    
    //response.data.countries is an array of objects, we will convert into array of countries
    const modifiedData = response.data.countries.map((data)=> {
        return data.name;
     });
    
    return modifiedData;

  } catch (error){
    console.log(error);
  }
};


