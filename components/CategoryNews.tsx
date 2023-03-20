import styles from "../styles/TopStory.module.css";
import truncate from "../utils/helper";

import Card from "./Cards/Card";

interface CategoryNewsProps {
  hasTitle: boolean;
  title?: string;
  news: [];
}

export default function CategoryNews({
  hasTitle,
  title,
  news,
}: CategoryNewsProps) {
  return (
    <div className={styles.category__wrapper}>
      {hasTitle && (
        <div className={`${styles.title} ${styles.title_category}`}>
          {title}
        </div>
      )}
      <div className={styles.category__content}>
        {news?.map((value: any, index: number) => {
          if (index < 3) {
            return (
              <Card
                key={index}
                id={value.id}
                title={truncate(value.webTitle, 40)}
                url={
                  value.blocks.main
                    ? value.blocks.main.elements[0].assets[2].file
                    : "https://i.ibb.co/ZdxCzny/The-Peaks-Bg.png"
                }
                subtitle={truncate(value.blocks.body[0].bodyTextSummary, 90)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
