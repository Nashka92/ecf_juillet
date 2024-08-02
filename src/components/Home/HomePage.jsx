import React from "react";
import { useNavigate } from "react-router-dom";
import useUserName from "../hooks/useUserName";
import User from "../../asset/User";

const HomePage = () => {
  const [name, saveName] = useUserName();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    saveName(e.target.value);
  };

  const handleButtonClick = () => {
    if (name) {
      navigate("/game");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 m-3">
      <h1 className="text-3xl font-bold">Bienvenu dans Quiz Aventure !</h1>

      <div className="flex flex-col items-center space-y-2">
        <p>Entrez ici votre prénom</p>
        <div className="flex items-center border-2 border-gray-300 rounded-md p-2">
          <User className="mr-2" />
          <span className="text-gray-400 mx-2">|</span>
          <input
            className="border-none outline-none flex-1"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <button
          onClick={handleButtonClick}
          className={`bg-customYellow text-white p-2 rounded-md hover:bg-orange-500 ${
            !name ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!name}
        >
          <span className="text-white font-bold">Commencer le jeu</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;

