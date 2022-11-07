import Statistics from "components/Statistics/Statistics";
import React from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import "components/Feedback/Feedback.css";
import { Section } from "components/Section/Section";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = (event) =>
    this.setState((prevState) => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));

  goodFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () => {
    return parseInt((this.state.good * 100) / this.total());
  };

  render() {
    return (
      <div className="feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onClickBtn}
          />
        </Section>
        <Section title="Statistics">
          {this.total() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
