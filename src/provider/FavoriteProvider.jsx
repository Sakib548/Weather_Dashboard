import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

// eslint-disable-next-line react-refresh/only-export-components
const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };

  const removeFromFavorites = (location) => {
    setFavorites(favorites.filter((f) => f.location !== location));
  };
  return (
    <FavoriteContext.Provider
      value={{ addToFavorites, removeFromFavorites, favorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
