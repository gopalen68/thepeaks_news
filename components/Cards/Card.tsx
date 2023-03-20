import Link from "next/link";

import styles from "../../styles/Card.module.css";

export default function Card({ id, title, url, subtitle }: NewsProps) {
  return (
    <Link href={`/${encodeURIComponent(id)}`}>
      <div className={styles.card}>
        <img src={url} alt="" />
        <div className={styles.card__wrapper}>
          <div className={styles.news__title}>{title}</div>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
