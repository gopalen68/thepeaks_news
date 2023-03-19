import styles from "../../styles/Card.module.css";

export default function CardMd({ title, url }: NewsProps) {
  return (
    <div className={`${styles.card} ${styles.med__card}`}>
      <img src={url} alt="" />
      <div className={styles.card__wrapper}>
        <div className={`${styles.news__title} ${styles.med__title}`}>
          {title}
        </div>
      </div>
    </div>
  );
}
