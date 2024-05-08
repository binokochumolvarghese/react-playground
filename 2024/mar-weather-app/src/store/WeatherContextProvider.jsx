import { Children, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../apis/weatherApi";


export default function WeatherContextProvider( {children} ){

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [nextDaysWeatherforecast, setNextDaysWeatherforecast] = useState([]);

    function convertDate(wDate){ 
        return new Date(wDate).toLocaleDateString('en-AU', {
          day: 'numeric', month: 'short', year: 'numeric'
        }).replace(/ /g, ' ');
      }

      
    function tomorrowDate(){ 
        const today = new Date() // get today's date
        const tomorrow = new Date(today)
        tomorrow.setDate(today.getDate() + 1) ;
    
        return new Date(tomorrow).toLocaleDateString('en-AU', {
          day: 'numeric', month: 'short', year: 'numeric'
        }).replace(/ /g, ' ');
      }


    function handleOnSearchChange(searchData) {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const forecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {

            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            // Function to filter the forecast array data to fetch tomorrow weather data only.
            const nextDayForecast = forecastResponse.list.filter((data) => {
                return convertDate(data.dt_txt) === tomorrowDate()
            })

            console.log(forecastResponse);

            setCurrentWeather(weatherResponse);
            setForecast(nextDayForecast);
            
            // console.log(weatherResponse);
            // console.log(forecastResponse);

        })
        .catch(function(err) {
          
        })

    }

    const contextValue = {
        currentWeatherData: currentWeather,
        forecastData: forecast,
        onSearchChange : handleOnSearchChange
    }

    return (
        <WeatherContext.Provider value={contextValue}>
            {children}
        </WeatherContext.Provider>
    )
 
}