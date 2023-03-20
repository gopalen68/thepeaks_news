import Link from "next/link";

import styles from "../../styles/Card.module.css";

export default function CardMd({ id, title, url }: NewsProps) {
  return (
    <Link href={`/${encodeURIComponent(id)}`}>
      <div className={`${styles.card} ${styles.med__card}`}>
        <img src={url} alt="" />
        <div className={styles.card__wrapper}>
          <div className={`${styles.news__title} ${styles.med__title}`}>
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}
