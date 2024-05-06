import { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import WeatherContextProvider from "./store/WeatherContextProvider";
import CurrentWeather from "./components/current-weather/CurrentWeather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <WeatherContextProvider>
      <Search />
      <CurrentWeather />
    </WeatherContextProvider>
  );
}

export default App;
