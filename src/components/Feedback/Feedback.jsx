import Statistics from 'components/Statistics/Statistics';
import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import 'components/Feedback/Feedback.css';
import { Section } from 'components/Section/Section';
import { type } from '@testing-library/user-event/dist/type';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const options = { good: 'good', neutral: 'neutral', bad: 'bad' };

  const onLeaveFeedback = options => {
    switch (options) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        throw new Error(`Unkowns feedback type - ${options}`);
    }
  };

  const total = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return parseInt((good * 100) / total());
  };

  return (
    <div className="feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
