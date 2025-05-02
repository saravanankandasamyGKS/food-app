import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 gap-4"
        >
          {/* Text Section */}
          <div className="md:w-8/12">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>

          {/* Image and Button */}
          <div className="md:w-4/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-lg shadow-sm"
            />
            <button
              className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-black text-white text-sm rounded-lg shadow-md hover:bg-gray-800 transition"
              onClick={() => handleAddItems(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
