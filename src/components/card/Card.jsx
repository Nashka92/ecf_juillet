import React from "react";

const Card = ({ children }) => {
  return (
    <div className="border p-4 rounded-md shadow-lg">
      {children}
    </div>
  );
};

export default Card;
