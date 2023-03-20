import styles from "../styles/TopStory.module.css";
import truncate from "../utils/helper";

import CardLg from "./Cards/CardLg";
import CardMd from "./Cards/CardMd";
import CardNoImage from "./Cards/CardNoImage";
import CategoryNews from "./CategoryNews";

export default function TopStory({ stories }: any) {
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
            id={stories.cardbg.id}
            title={truncate(stories.cardbg.webTitle, 50)}
            url={
              stories.cardbg.blocks.main
                ? stories.cardbg.blocks.main.elements[0].assets[2].file
                : "https://i.ibb.co/ZdxCzny/The-Peaks-Bg.png"
            }
            subtitle={truncate(
              stories.cardbg.blocks.body[0].bodyTextSummary,
              90
            )}
          />
        </div>
        <div className={styles.right__card}>
          <div className={styles.top__right__card}>
            {stories.cardmd.map((value: any, index: any) => (
              <CardMd
                id={value.id}
                key={index}
                title={truncate(value.webTitle, 50)}
                url={
                  value.blocks.main
                    ? value.blocks.main.elements[0].assets[2].file
                    : "https://i.ibb.co/ZdxCzny/The-Peaks-Bg.png"
                }
              />
            ))}
          </div>
          <div className={styles.bottom__right__card}>
            {stories.cardNoImg.map((value: any, index: any) => (
              <CardNoImage
                id={value.id}
                key={index}
                title={truncate(value.webTitle, 50)}
              />
            ))}
          </div>
        </div>
      </div>
      <CategoryNews hasTitle={false} news={stories.cardCatNews} />
    </div>
  );
}
