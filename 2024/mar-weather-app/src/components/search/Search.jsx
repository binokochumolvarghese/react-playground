import { useContext, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { WeatherContext } from "../../store/WeatherContext";
import { GEO_API_URL, geoApiOptions } from "../../apis/weatherApi";

const Search = () => {
  const { onSearchChange } = useContext(WeatherContext);
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const apiResponse = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    );

    // Return error if API response is not okay.
    if (!apiResponse.ok) {
      return {
        value: "error",
        label: "Some error happened.",
      };
    }

    const response = await apiResponse.json();

    return {
      options: response.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.country}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="container mx-auto pb-4">
      <div className="grid md:grid-cols-2 justify-items-start">
        <p className="text-2xl font-medium"> Weather Data</p>

        <AsyncPaginate
          className="w-full text-left"
          placeholder="Search for city"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions} // function to call
        />
      </div>
    </div>
  );
};

export default Search;
