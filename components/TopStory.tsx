import styles from "../styles/TopStory.module.css";

import CardLg from "./Cards/CardLg";
import CardMd from "./Cards/CardMd";
import CardNoImage from "./Cards/CardNoImage";
import CategoryNews from "./CategoryNews";

export default function TopStory() {
  return (
    <div className={styles.top__wrapper}>
      <div className={styles.top__header__content}>
        <div className={styles.title}>Top Stories</div>
        <div className={styles.sort__section}>
          <select name="blogs" id="sortBlogs" className={styles.sort__option}>
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </div>
      </div>
      <div className={styles.top__main__content}>
        <div className={styles.left__card}>
          <CardLg
            title="Coronavirus live news: markets fall over fears of long US"
            url="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            subtitle=" Republican senators on Capitol Hill have expressed their
                              dismay at a Donald Trump."
          />
        </div>
        <div className={styles.right__card}>
          <div className={styles.top__right__card}>
            <CardMd
              title="Coronavirus live news: markets fall over fears of long US"
              url="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            />
            <CardMd
              title="Coronavirus live news: markets fall over fears of long US"
              url="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            />
          </div>
          <div className={styles.bottom__right__card}>
            <CardNoImage title="Coronavirus live news: markets fall over fears of long US" />
            <CardNoImage title="Coronavirus live news: markets fall over fears of long US" />
          </div>
        </div>
      </div>
      <CategoryNews hasTitle={false} />
    </div>
  );
}
