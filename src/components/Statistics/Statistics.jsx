import React from "react";
import "components/Statistics/Statistics.css";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className="list">
        <li className="list__item">Good: {good}</li>
        <li className="list__item">Neutral: {neutral}</li>
        <li className="list__item">Bad: {bad}</li>
        <li className="list__item">Total: {total}</li>
        <li className="list__item">
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    </>
  );
};

export default Statistics;
