import { IMG_URL_CDN } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, costForTwo }) => {
  return (
    <div className="restaurant-card">
      <img src={IMG_URL_CDN + cloudinaryImageId} />
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
