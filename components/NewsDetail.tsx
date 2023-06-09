import styles from "../styles/NewsDetail.module.css";

export default function NewsDetail({ news_content }: any) {
  return (
    <div className="container">
      <main className="main__wrapper">
        <div className={styles.blog__wrapper}>
          <div className={styles.blog__header}>
            <div className={styles.blog__date}>
              {news_content.webPublicationDate}
            </div>
            <div
              className={`${styles.blog__title} ${styles.title} ${styles.title_category}`}
            >
              {news_content.webTitle}
            </div>
            <div className={`${styles.blog__subtitle} ${styles.news__title}`}>
              {news_content.fields.headline}
            </div>
          </div>
          <hr className={styles.divider} />
          <div className={styles.blog__body}>
            <div className={styles.blog__media}>
              <img
                src={
                  news_content.blocks.main
                    ? news_content.blocks.main.elements[0].assets[2].file
                    : "https://i.ibb.co/ZdxCzny/The-Peaks-Bg.png"
                }
                alt=""
              />
              <figcaption>
                {news_content.blocks.main
                  ? news_content.blocks.main.elements[0].imageTypeData.caption
                  : ""}
              </figcaption>
            </div>
            <div className={styles.blog__content}>
              <div dangerouslySetInnerHTML={{__html: news_content.blocks.body[0].bodyHtml}} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
