import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData?.info;

  return (
    <div className="relative m-4 p-4 w-full sm:w-64 md:w-72 rounded-lg bg-yellow-100 hover:bg-gray-200 shadow-lg transition-all">
      {/* Restaurant Image */}
      <img
        className="rounded-lg w-full object-cover h-40"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Restaurant Details */}
      <h3 className="font-semibold py-4 text-lg">{name}</h3>
      <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
      <div className="flex justify-between mt-2 text-sm text-gray-700">
        <span>{avgRating} ⭐</span>
        <span>{costForTwo}</span>
      </div>
      <h4 className="text-xs text-gray-500 mt-2">{sla?.slaString}</h4>
    </div>
  );
};

// Higher-order component (HOC) for promoted label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Promoted label */}
        <label className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
