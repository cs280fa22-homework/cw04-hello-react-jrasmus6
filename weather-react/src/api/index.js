import axios from "axios";

const BASE_URL = "https://dataservice.accuweather.com";
const API_KEY = "UTvQpJWoEpycvaxxFM1rv44ZSp4wnlbj"; // terrible practice!
// You should never save API key directly in source code!
// In future lessons we will learn a better practice!

export async function getLocationKey(city) {
  try {
    const response = await axios.get(
      `${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`
    );
    const data = await response.data;
    const location = data[0];
    return location;
  } catch(err) {
    console.log(err);
  };
}

export async function getCurrentCondition(location) {
  try {
    const response = await axios.get(
      `${BASE_URL}/currentconditions/v1/${location.Key}?apikey=${API_KEY}`
    );
    const data = await response.data;
    const forecast = data[0];
    return forecast;
  } catch (err) {
    console.log(err);
  }
}