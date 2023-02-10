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
      <div className="search-container">
        <input
          className="search"
          value={searchTxt}
          placeholder="Search"
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          onClick={() => {
            setFilteredRestaurants(
              filterRestaurantList(allRestaurants, searchTxt)
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
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
