import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4 m-4 border border-gray-200">
      <div className="w-10 h-10 mr-4">{icon}</div>
      <div className="flex items-center">
        <div className="font-bold text-custom-blue text-xl mb-2">{title}</div>
      </div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;
