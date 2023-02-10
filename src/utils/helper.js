export function filterRestaurantList(restaurantList, searchInput) {
  return restaurantList.filter((restaurant) => {
    return restaurant?.data?.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
}
