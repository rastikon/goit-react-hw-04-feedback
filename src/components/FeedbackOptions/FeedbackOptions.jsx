// import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button key={key} onClick={() => onLeaveFeedback(key)} name={key}>
          {key}
        </button>
      ))}
    </div>
  );
}
