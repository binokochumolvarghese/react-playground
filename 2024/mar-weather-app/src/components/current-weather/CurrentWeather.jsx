import { useContext } from "react";
import { WeatherContext } from "../../store/WeatherContext";
import { WEATHER_API_IMG } from "../../apis/weatherApi";
import Search from "../search/Search";
import ForecastWeather from "../ForecastWeather/ForecastWeather";

const CurrentWeather = () => {
  const { currentWeatherData } = useContext(WeatherContext);

  function showSunTimes(dt, timezone) {
    const utcSeconds = parseInt(dt, 10) + parseInt(timezone, 10);
    const utc_milliseconds = utcSeconds * 1000;
    const localDate = new Date(utc_milliseconds).toUTCString();
    const locaTime = new Date(localDate).toISOString().split("T")[1].split(".")[0];
    return locaTime;
  }

  return (
    <div className="rounded-lg bg-slate-200">
      <>
        {currentWeatherData && (
          <div className=" text-gray-800 text-left p-4">
            <div className=" grid md:grid-cols-1 text-gray-800 text-left pb-3">
              <p className="text-2xl font-medium">Today's Highlights</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-gray-600 text-left">
              <div className="row-span-2 bg-white p-3 rounded-lg">
                <p className="text-2xl">{currentWeatherData.name}</p>

                <div className="columns-2">
                  <img
                    alt="weather"
                    className="weather-icon"
                    src={`${WEATHER_API_IMG}/${currentWeatherData.weather[0].icon}@2x.png`}
                  />

                  <p className="text-5xl">
                    {Math.round(currentWeatherData.main.temp)}&deg;C
                  </p>
                  <p className="capitalize">
                    {currentWeatherData.weather[0].description}
                  </p>
                </div>

                <p className="text-slate-500">
                  Feels like {Math.round(currentWeatherData.main.feels_like)}
                  °C
                </p>
                <div className="flex flex-row text-slate-500">
                 <p className="mr-2">
                    Low: {Math.round(currentWeatherData.main.temp_min)}&deg;C{" "}
                  </p>
                  <p className="mr-2">
                    High: {Math.round(currentWeatherData.main.temp_max)}&deg;C{" "}
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 grid  rounded-lg">
                <p className="text-slate-400">Sunrise & Sunset</p>
                <div className="">
                  <p className="text-md">{showSunTimes(currentWeatherData.sys.sunrise, currentWeatherData.timezone)}</p>
                  <p className="text-md">{showSunTimes(currentWeatherData.sys.sunset, currentWeatherData.timezone)}</p>
                </div>
              </div>

              <div className="bg-white p-3 grid rounded-lg">
                <p className="text-slate-400">Wind Status</p>
                <p className="text-3xl">{currentWeatherData.wind.speed} m/s</p>
              </div>

              <div className="bg-white p-3 grid rounded-lg">
                <p className="text-slate-400">Cloud</p>
                <p className="text-3xl">{currentWeatherData.clouds.all}%</p>
              </div>

              <div className="bg-white p-3 grid rounded-lg">
                <p className="text-slate-400">Humidity</p>
                <p className="text-3xl">{currentWeatherData.main.humidity}%</p>
              </div>

              <div className="bg-white p-3 grid rounded-lg">
                <p className="text-slate-400">Pressure</p>
                <p className="text-3xl">
                  {currentWeatherData.main.pressure} hPa
                </p>
              </div>

              <div className=" bg-white p-3 grid rounded-lg">
                <p className="text-slate-400">Visibilty</p>
                <p className="text-3xl">
                  {currentWeatherData.visibility / 1000} km
                </p>
              </div>
            </div>
          </div>
        )}
      </>
      
      {/* TODO: Data is not laoding for the below condition  */}
      {/* { forecastData && <ForecastWeather/> } */}
      <ForecastWeather/>
    </div>
  );
};

export default CurrentWeather;
