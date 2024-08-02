import React, { useState, useEffect } from "react";
import { useQuestions } from "../hooks/useQuestions";
import { ClipLoader } from "react-spinners";
import useUserName from "../hooks/useUserName";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import NeVousDecouragezPasIcon from "../../asset/icons/NeVousDecouragezPasIcon";
import AucunsEffortIcon from "../../asset/icons/AucunsEffortIcon";
import PeutMieuxFaire from "../../asset/icons/PeutMieuxFaire";
import Pasmal from "../../asset/icons/Pasmal";
import Bien from "../../asset/icons/Bien";
import Excellent from "../../asset/icons/Excellent";

const Game = () => {
  const { questions, error } = useQuestions(); // mon hook personnalisé pr récuperer la logique des question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // le score est initialisé a 0 par défaut
  const [name] = useUserName();
  const [difficulty, setDifficulty] = useState(1);

  // useEffect pour mettre à jour la difficulté lorsque l'index de la question actuelle change
  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      setDifficulty(questions[currentQuestionIndex].difficulty);
    }
  }, [currentQuestionIndex, questions]);

  // Fonction pour gérer la réponse des saisis de l'utilisateur
  const handleAnswer = (choice) => {
    if (choice === questions[currentQuestionIndex].correct) {
      setScore((prevScore) => prevScore + 1); 
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // ici on incrémente et on passe a la question suivante
  };

  // Fonction pour obtenir le message final en fonction du score
  const getFinalMessage = (score) => {
    if (score === 0) {
      return (
        <div className="flex flex-col items-center">
          <AucunsEffortIcon className="mb-2" />
          <span>Aucun effort !</span>
        </div>
      );
    } else if (score >= 1 && score <= 3) {
      return (
        <div className="flex flex-col items-center">
          <NeVousDecouragezPasIcon className="mb-2" />
          <span>Ne vous découragez pas</span>
        </div>
      );
    } else if (score >= 4 && score <= 6) {
      return (
        <div className="flex flex-col items-center">
          <PeutMieuxFaire className="mb-2" />
          <span>Peut mieux faire</span>
        </div>
      );
    } else if (score >= 7 && score <= 8) {
      return (
        <div className="flex flex-col items-center">
          <Pasmal className="mb-2" />
          <span>Pas mal, pas mal</span>
        </div>
      );
    } else if (score === 9) {
      return (
        <div className="flex flex-col items-center">
          <Bien className="mb-2" />
          <span>Bien !</span>
        </div>
      );
    } else if (score === 10) {
      return (
        <div className="flex flex-col items-center">
          <Excellent className="mb-2" />
          <span>Excellent !</span>
        </div>
      );
    } else {
      return "";
    }
  };

  // Affichage d'un message d'erreur en cas de problème de récupération des questions
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (questions.length === 0) {
    return <ClipLoader size={75} />;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>
          {name}, votre score est: {score}
        </h2>
        <p>{getFinalMessage(score)}</p>
        <button className="bg-customYellow p-2 rounded-md text-white hover:bg-orange-500">
          <Link to="/">Retour à l'accueil</Link>
        </button>
      </div>
    );
  }

  // Récupération de la question actuelle
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="font-bold text-[25px]">Bonjour {name}</p>
      <div className="flex gap-4 justify-center mb-4">
        <p>Difficulté actuelle : {difficulty}</p>
        <p>Votre progression : {score}</p>
      </div>

      <Card>
        <p>Question {currentQuestionIndex + 1}</p>
        <p>{currentQuestion.question}</p>
        {currentQuestion.image && (
          <img
            src={currentQuestion.image}
            alt="Question"
            className="my-4 w-[280px]"
          />
        )}
        {currentQuestion.choices.map((choice, id) => (
          <div key={id} className="mb-2">
            <button
              className="bg-customYellow text-white p-2 rounded-md w-full hover:bg-orange-500"
              onClick={() => handleAnswer(choice)}
            >
              {choice}
            </button>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Game;
