import css from "../Options/Options.module.css";

function Options({ onFeedback, totalFeedback }) {
  return (
    <div className={css.OptionBlock}>
      <button className={css.OptionBtn} onClick={() => onFeedback("good")}>Good</button>
      <button className={css.OptionBtn} onClick={() => onFeedback("neutral")}>Neutral</button>
      <button className={css.OptionBtn} onClick={() => onFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => onFeedback("reset")}>Reset</button>
      )}
    </div>
  );
}
export default Options;
