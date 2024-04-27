import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context/";
import ClearSkyImage from "/backgrounds/clear-sky.jpg";
import FewCloudsImage from "/backgrounds/few-clouds.jpg";
import RainyDayImage from "/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "/backgrounds/scattered-clouds.jpg";
import SnowImage from "/backgrounds/snow.jpg";
import ThunderStormImage from "/backgrounds/thunderstorm.jpg";
import WinterImage from "/backgrounds/winter.jpg";
export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatteredCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md 2-96 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${climateImage}')` }}
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
