import styles from "../styles/SearchResult.module.css";

import CategoryNews from "./CategoryNews";

export default function SearchResult() {
  return (
    <div className="container">
      <main className="main__wrapper">
        <div className={styles.top__wrapper}>
          <div className={styles.top__header__content}>
            <div className={styles.title}>Search Result</div>
            <div className={styles.sort__section}>
              <select
                name="blogs"
                id="sortBlogs"
                className={styles.sort__option}
              >
                <option value="desc">Newest first</option>
                <option value="asc">Oldest first</option>
              </select>
            </div>
          </div>
          {/* To modify and add flex wrap */}
          <CategoryNews hasTitle={false} />
        </div>
      </main>
    </div>
  );
}
