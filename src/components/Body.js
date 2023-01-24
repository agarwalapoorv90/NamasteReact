import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterRestaurantList = (restaurantList, searchInput) => {
  return restaurantList.filter((restaurant) => {
    return restaurant.data.name.includes(searchInput);
  });
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
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
            setRestaurants(filterRestaurantList(restaurantList, searchTxt));
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
