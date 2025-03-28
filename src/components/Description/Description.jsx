import css from "../../components/Description/Description.module.css";

const Description = () => {
  return (
    <div>
      <h1 className={css.DescriptionTitle}>Sip Happens Café</h1>
      <p className={css.DescriptionText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
export default Description;
