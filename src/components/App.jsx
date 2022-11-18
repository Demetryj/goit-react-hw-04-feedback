// import { Component } from 'react';
import { useFeedback } from '../hooks/useFeedback';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics ';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification ';

export const App = () => {
  const { good, neutral, bad, incrementGoog, incrementNeutral, incrementBad } =
    useFeedback();

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        incrementGoog();
        break;
      case 'neutral':
        incrementNeutral();
        break;
      case 'bad':
        incrementBad();
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentageGoodFeedback = Math.round(
      (good / (good + neutral + bad)) * 100
    );
    return percentageGoodFeedback ? percentageGoodFeedback : 0;
  };

  const feedback = Object.keys(useFeedback()).slice(0, 3);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={handleIncrement} />
      </Section>

      <Section title="Statistics">
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
