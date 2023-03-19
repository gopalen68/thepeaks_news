import styles from "../../styles/Card.module.css";

export default function Card({ title, url, subtitle }: NewsProps) {
  return (
    <div className={styles.card}>
      <img src={url} alt="" />
      <div className={styles.card__wrapper}>
        <div className={styles.news__title}>{title}</div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
