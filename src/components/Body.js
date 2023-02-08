import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterRestaurantList = (restaurantList, searchInput) => {
  return restaurantList.filter((restaurant) => {
    return restaurant?.data?.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
};

const Body = () => {
  const api =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING";
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    try {
      const response = await fetch(api);
      const data = await response.json();
      const relData = data.data?.cards[2]?.data?.data?.cards;
      setAllRestaurants(relData);
      setFilteredRestaurants(relData);
    } catch (error) {
      console.log(error);
    }
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
