import Link from "next/link";

import styles from "../../styles/Card.module.css";

export default function CardNoImage({ id, title }: NewsProps) {
  return (
    <div className={`${styles.card} ${styles.sm__card}`}>
      <Link href={`/${encodeURIComponent(id)}`}>
        <div className={`${styles.card__wrapper} ${styles.noimage__card}`}>
          <div className={`${styles.news__title} ${styles.med__title}`}>
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
}
