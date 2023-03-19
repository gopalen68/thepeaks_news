import styles from "../../styles/Card.module.css";

export default function CardNoImage({ title }: NewsProps) {
  return (
    <div className={`${styles.card} ${styles.sm__card}`}>
      <div className={`${styles.card__wrapper} ${styles.noimage__card}`}>
        <div className={`${styles.news__title} ${styles.med__title}`}>
          {title}
        </div>
      </div>
    </div>
  );
}
