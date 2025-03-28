import css from "../Feedback/Feedback.module.css";

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.FeedbackBlock}>
      <p className={css.FeedbackText}>Good: {feedback.good}</p>
      <p className={css.FeedbackText}>Neutral: {feedback.neutral}</p>
      <p className={css.FeedbackText}>Bad: {feedback.bad}</p>
      <p className={css.FeedbackText}>Total: {totalFeedback}</p>
      <p className={css.FeedbackText}>Positive: {positiveFeedback}%</p>
    </div>
  );
}

export default Feedback;
