import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL_CDN } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restMenu, setRestMenu] = useState(null);

  async function getRestaurantMenu() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId=" +
          resId
      );
      const data = await response.json();
      setRestMenu(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return !restMenu ? (
    <Shimmer />
  ) : (
    <>
      <h1 className="restaurant-heading">Restaurant Menu</h1>
      <div className="restaurant-menu">
        <div>
          <h2>Restaurant Name: {restMenu.name}</h2>
          <img src={IMG_URL_CDN + restMenu.cloudinaryImageId} alt="image" />
        </div>
        <div>
          <ul className="restaurant-menu-list">
            {Object.values(restMenu.menu.items).map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
