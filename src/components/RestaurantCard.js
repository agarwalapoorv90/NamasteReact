import { IMG_URL_CDN } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwo,
  id,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <Link to={"/restaurant/" + id}>
        <img src={IMG_URL_CDN + cloudinaryImageId} className="restaurant-img" />
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;
