import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";
import CloudIcon from "/cloud.svg";

import HazeIcon from "/haze.svg";
import SunnyIcon from "/icons/sunny.svg";
import RainIcon from "/rainy.svg";
import ThunderIcon from "/thunder.svg";

import PinIcon from "/pin.svg";
export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Haze":
        return HazeIcon;
      case "Clear":
        return SunnyIcon;
      case "Thunder":
        return ThunderIcon;
      case "Cloud":
        return CloudIcon;
      case "Fog":
        return HazeIcon;
      case "Mist":
        return HazeIcon;

      default:
        return SunnyIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)}-{""}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}
