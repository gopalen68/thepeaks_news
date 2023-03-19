import styles from "../styles/TopStory.module.css";

import Card from "./Cards/Card";

interface CategoryNewsProps {
  hasTitle: boolean;
}

export default function CategoryNews({ hasTitle }: CategoryNewsProps) {
  return (
    <div className={styles.category__wrapper}>
      {hasTitle && (
        <div className={`${styles.title} ${styles.title_category}`}>Sports</div>
      )}
      <div className={styles.category__content}>
        <Card
          title="Coronavirus live news: markets fall over fears of long US"
          url="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
          subtitle=" Republican senators on Capitol Hill have expressed their
                    dismay at a Donald Trump."
        />
        <Card
          title="Coronavirus live news: markets fall over fears of long US"
          url="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
          subtitle=" Republican senators on Capitol Hill have expressed their
                    dismay at a Donald Trump."
        />
        <Card
          title="Coronavirus live news: markets fall over fears of long US"
          url="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
          subtitle=" Republican senators on Capitol Hill have expressed their
                    dismay at a Donald Trump."
        />
      </div>
    </div>
  );
}
