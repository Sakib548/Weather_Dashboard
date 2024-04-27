import { useContext } from "react";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";
import SearchIcon from "/search.svg";
export default function Search() {
  // const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(searchTerm);
  //   const fetchedLocation = getLocationByName(searchTerm);
  //   console.log(fetchedLocation);
  //   setSelectedLocation({ ...fetchedLocation });
  // }

  const doSearch = useDebounce((term) => {
    console.log(term);
    const fetchedLocation = getLocationByName(term);
    console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  function handleChanged(e) {
    // console.log(val);
    let value = e.target.value;
    // setSearchTerm(value);
    doSearch(value);
  }
  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChanged}
          required
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
    </form>
  );
}
