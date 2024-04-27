import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

// eslint-disable-next-line react-refresh/only-export-components
const WeatherProvider = ({ children }) => {
  const { loading, error, weatherData } = useWeather();
  return (
    <WeatherContext.Provider value={{ loading, error, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
