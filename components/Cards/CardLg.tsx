import styles from "../../styles/Card.module.css";

export default function CardLg({ title, url, subtitle }: NewsProps) {
  return (
    <div className={`${styles.card} ${styles.card__big}`}>
      <img src={url} alt="" />
      <div className={styles.card__wrapper}>
        <div className={`${styles.news__title} ${styles.big__title}`}>
          {title}
        </div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
