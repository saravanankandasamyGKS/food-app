import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex(); // Toggle category visibility
  };

  return (
    <div className="w-full sm:w-9/12 mx-auto my-4 bg-gray-50 shadow-lg rounded-lg p-4">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-md hover:bg-gray-200 transition"
        onClick={handleClick}
      >
        <span className="font-bold text-lg text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          ⬇️
        </span>
      </div>

      {/* Accordion Body */}
      {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurantCategory;
