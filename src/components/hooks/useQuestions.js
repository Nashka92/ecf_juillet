import { useEffect, useState } from "react";
import { fetchQuestions } from "../services/questionsService";

export const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        setError(error.message);
      }
    };

    loadQuestions();
  }, []);

  return { questions, error };
};
