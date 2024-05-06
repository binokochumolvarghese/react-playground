import { useContext } from "react";
import { WeatherContext } from "../../store/WeatherContext";
import { WEATHER_API_IMG } from "../../apis/weatherApi";

const ForecastWeather = () => {
  const { currentWeatherData, forecastData } = useContext(WeatherContext);

  console.log(forecastData);

  function convertDate(wDate){ 
    console.log(wDate);

    return new Date(wDate).toLocaleTimeString('en-AU', {
      hour: 'numeric', day: 'numeric', month: 'short'
    }).replace(/ /g, ' ');
  }
 
  return (
    <>
      {forecastData && (
        <>
          <div className="text-gray-800 text-left p-4">
            <div className="grid md:grid-cols-1 text-gray-600 text-left  ">
              <p className="text-2xl font-medium"> Next day Highlights </p>
            </div>
          </div>

          <div className="rounded-lg  grid md:grid-cols-8 gap-4 text-gray-600 text-left px-4 pb-4">
            {forecastData.map((forecast, index) => (
              <div className="bg-white rounded-lg gap-4 text-gray-600 text-left p-2" key={index}>
                <p className="text-slate-400"> { convertDate(forecast.dt_txt) }  </p>

                <div className="">
                  <img
                    alt="weather"
                    className="weather-icon"
                    src={`${WEATHER_API_IMG}/${forecast.weather[0].icon}@2x.png`}
                  />
                </div>

                <p className="capitalize">
                    {currentWeatherData.weather[0].description}
                  </p>

                <div className="flex flex-row text-slate-500">
                <p className="mr-2 ">
                    {Math.round(forecast.main.temp_max)}&deg;C{" "}
                  </p>
                  <p className="text-slate-400">
                    {Math.round(forecast.main.temp_min)}&deg;C{" "}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ForecastWeather;
