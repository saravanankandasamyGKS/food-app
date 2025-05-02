import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9083215&lng=77.6050777&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1 className="text-center text-red-600 mt-8 text-xl">
        You're offline! Please check your internet connection.
      </h1>
    );

  if (listOfRestaurant.length === 0) return <Shimmer />;

  return (
    <div className="body bg-green-50 min-h-screen">
      {/* Search & Filter Controls */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              className="flex-1 md:w-64 border border-black rounded-lg px-4 py-2"
              placeholder="Search restaurants..."
              value={searchtext}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2"
              onClick={() => {
                const filtered = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                );
                setFilteredRestaurant(filtered);
              }}
            >
              Search
            </button>
          </div>

          {/* Top Rated Button */}
          <button
            className="bg-gray-200 hover:bg-gray-300 text-black rounded-lg px-4 py-2"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.6
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-10">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant.info.availability ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
