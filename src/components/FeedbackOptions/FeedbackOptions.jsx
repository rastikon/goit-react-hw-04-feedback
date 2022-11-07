import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map((key) => (
        <button key={key} onClick={onLeaveFeedback} name={key}>
          {key}
        </button>
      ))}
    </div>
  );
};
