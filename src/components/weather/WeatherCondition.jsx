import { useContext } from "react";
import { WeatherContext } from "../../context/index";
import CloudIcon from "/icons/cloud.svg";
import Humidity from "/icons/humidity.svg";
import TempMaxIcon from "/icons/temp-max.svg";
import TempMinIcon from "/icons/temp-min.svg";
import Wind from "/icons/wind.svg";

export default function WeatherCondition() {
  const weatherData = useContext(WeatherContext);
  const {
    maxTemparature,
    minTemparature,
    humidity,
    cloudPercentage,
    wind,
    climate,
  } = weatherData.weatherData;
  //  console.log("WeatherData", weatherData);
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The climate is {climate}
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemparature)}</p>
            <img src={TempMaxIcon} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemparature)}</p>
            <img src={TempMinIcon} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={Humidity} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={CloudIcon} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={Wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
