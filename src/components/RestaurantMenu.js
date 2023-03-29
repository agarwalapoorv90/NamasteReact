import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_URL_CDN, restaurantMenuList } from "../config";
import { addItem } from "../utils/cartSlice";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restMenu = useRestaurantMenu(resId);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

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
            {restaurantMenuList.map((item) => {
              return (
                <li key={item.id}>
                  {item.dish}
                  <button
                    className="p-1 bg-green-50"
                    onClick={() => handleAddItem(item)}
                  >
                    Add Item
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
