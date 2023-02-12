import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterRestaurantList } from "../utils/helper";
import { RESTAURANT_LIST_SWIGGY_API } from "../config";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const isOnline = useOnline();

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    try {
      const response = await fetch(RESTAURANT_LIST_SWIGGY_API);
      const data = await response.json();
      const relData = data.data?.cards[2]?.data?.data?.cards;
      setAllRestaurants(relData);
      setFilteredRestaurants(relData);
    } catch (error) {
      console.log(error);
    }
  }

  if (!isOnline) {
    return <h1>Please check your internet connection!!</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          className="focus:bg-green-200 p-2 m-2"
          value={searchTxt}
          placeholder="Search"
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            setFilteredRestaurants(
              filterRestaurantList(allRestaurants, searchTxt)
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
