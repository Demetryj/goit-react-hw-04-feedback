import { useState } from "react";

export const useFeedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const incrementGoog = () => setGood(prevGood => prevGood + 1);
    const incrementNeutral = () => setNeutral(prevNeutral => prevNeutral + 1);
    const incrementBad = () => setBad(prevBad => prevBad + 1);

    return {
      good,
      neutral,
      bad,
      incrementGoog,
      incrementNeutral,
      incrementBad,
    };
}