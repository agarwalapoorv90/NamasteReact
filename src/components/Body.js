import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterRestaurantList = (restaurantList, searchInput) => {
  return restaurantList.filter((restaurant) => {
    return restaurant.data.name.includes(searchInput);
  });
};

const getAllRestaurants = async () => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING"
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getAllRestaurants()
      .then((data) => {
        setAllRestaurants(data.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(data.data?.cards[2]?.data?.data?.cards);
      })
      .catch((error) => {
        console.error(`Could not get products: ${error}`);
      });
  }, []);

  // if (filteredRestaurants?.length === 0) {
  //   return <h1>No restaurants found</h1>;
  // }

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
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
