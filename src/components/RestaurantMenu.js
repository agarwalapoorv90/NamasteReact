import { useParams } from "react-router-dom";
import { IMG_URL_CDN } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restMenu = useRestaurantMenu(resId);

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
