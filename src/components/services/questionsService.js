import axios from "axios";

export const fetchQuestions = async () => {
  try {
    const response = await axios.get('data/questions.json');
    return response.data;
  } catch (error) {
    throw new Error("Une erreur s'est produite en chargant le fichier");
  }
};
