import { RESTAURANT_DETAIL_SWIGGY_API } from "../config";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restMenu, setRestMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    try {
      const response = await fetch(RESTAURANT_DETAIL_SWIGGY_API + resId);
      const data = await response.json();
      setRestMenu(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  return restMenu;
};

export default useRestaurantMenu;
