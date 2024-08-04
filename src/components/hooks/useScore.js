import { useState, useEffect } from 'react';

const useScore = (initialScore = 0) => {
    const [score, setScore] = useState(() => {
        // Récupérer le score initial depuis le localStorage
        const storedScore = localStorage.getItem('userScore');
        return storedScore !== null ? JSON.parse(storedScore) : initialScore;
    });

    useEffect(() => {
        // Mettre à jour le localStorage lorsque le score change
        localStorage.setItem('userScore', JSON.stringify(score));
    }, [score]);

    return [score, setScore];
};

export default useScore;



