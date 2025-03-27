import { useState, useEffect } from "react";
import Options from "../../components/Options/Options.jsx";
import Feedback from "../../components/Feedback/Feedback.jsx";
import FeedbackNotification from "../FeedbackNotification/FeedbackNotification.jsx";
import Description from "../../components/Description/Description.jsx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("feedback")) || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
      localStorage.removeItem("feedback");
    } else {
      setFeedback((prevFeedback) => {
        const newFeedback = {
          ...prevFeedback,
          [feedbackType]: prevFeedback[feedbackType] + 1,
        };
        return newFeedback;
      });
    }
  };

  return (
    <div>
      <Description></Description>
      <Options onFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <FeedbackNotification />
      )}
    </div>
  );
}

export default App;
