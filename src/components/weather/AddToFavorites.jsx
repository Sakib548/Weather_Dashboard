import { useContext, useEffect, useState } from "react";
import { FavoriteContext, WeatherContext } from "../../context";
import FavoriteHeart from "/heart-red.svg";
import Heart from "/heart.svg";
export default function AddToFavorite() {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  const [isFavorite, setIsFavorites] = useState(false);

  function handleFavorite() {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    setIsFavorites(!isFavorite);
  }

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);

    if (found) {
      setIsFavorites(found);
    }
    // console.log("Found", isFavorite);
  }, []);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex
         items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorite}
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? FavoriteHeart : Heart} alt="" />
        </button>
      </div>
    </div>
  );
}
