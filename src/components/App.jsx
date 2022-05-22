// import React from 'react';
import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);
  return (
    <div className="Counter">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleIncrement}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </div>
  );
}

export const App = () => {
  return Counter();
};

// class Counter extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleIncrement = item => {
//     setState(prevState => ({
//       [item]: prevState[item] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () =>
//     Math.round((good / countTotalFeedback()) * 100);

//   render() {
//     return (
//       <div className="Counter">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={handleIncrement}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           ></Statistics>
//         </Section>
//       </div>
//     );
//   }
// }

// export const App = () => {
//   return <Counter />;
// };
