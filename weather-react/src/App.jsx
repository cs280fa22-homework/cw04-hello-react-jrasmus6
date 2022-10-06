import Header from "./components/Header";
import Footer from "./components/Footer";
import { 
  getCurrentCondition, 
  getLocationKey 
} from "./api/index.js";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [city, setCity] = useState("City Name");
  const [condition, setCondition] = useState("Weather Condition");
  const [temp, setTemp] = useState("Temperature");

  const getForecast = async (query) => {
    // api calls
    const location = await getLocationKey(query);
    const forecast = await getCurrentCondition(location);
    setCity(location.LocalizedName);
    setCondition(forecast.WeatherText);
    setTemp(forecast.Temperature.Imperial.Value);
  }

  useEffect(() => {
    getForecast("Baltimore");
  }, []);

  return (
    <>
      <Header 
        getForecast={getForecast}
      />
      <Footer 
        city={city}
        condition={condition}
        temp={temp}
      />
    </>
  );
}

export default App
