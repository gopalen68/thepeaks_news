import styles from "../styles/NewsDetail.module.css";

export default function NewsDetail() {
  return (
    <div className="container">
      <main className="main__wrapper">
        <div className={styles.blog__wrapper}>
          <div className={styles.blog__header}>
            <div className={styles.blog__date}>fri 12 jun 2020 06.40 BST</div>
            <div
              className={`${styles.blog__title} ${styles.title} ${styles.title_category}`}
            >
              Global report: WHO warns of accelerating Covid-19 infections in
              Africa
            </div>
            <div className={`${styles.blog__subtitle} ${styles.news__title}`}>
              Continent is seeing more cases spread to the provinces; Trump
              supporters can’t sue over catching Covid-19 at rallies; Brazil
              confirms 30,000 new cases
            </div>
          </div>
          <hr className={styles.divider} />
          <div className={styles.blog__body}>
            <div className={styles.blog__media}>
              <img
                src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                alt=""
              />
              <figcaption>
                A woman walks along a flooded road amidst a storm in the
                Masiphumelele informal settlement in Cape Town Photograph: Nic
                Bothma/EPA
              </figcaption>
            </div>
            <div className={styles.blog__content}>
              <p>
                South Africa is the worst-affected country on the continent,
                with more than a quarter of all infections. But most countries
                have fewer than 1,000 infections, said Moeti, and the UN does
                not believe that severe cases are going undetected.
              </p>
              <p>
                Africa has recorded fewer than 6,000 deaths, according to an AFP
                tally, but just five countries account for 70% of these: South
                Africa, Algeria, Nigeria, Egypt and Sudan.
              </p>
              <p>
                In Africa, “the pandemic is still concentrated in and around
                capital cities but we are seeing more and more cases spread out
                into the provinces,” Moeti said.
              </p>
              <p>
                She said that in most countries on the continent, the virus
                entered capitals through international flights from Europe.
              </p>
              <p>
                Africa’s relatively young population compared to other
                continents, and in-built experience of dealing with disease
                outbreaks have been cited as reasons why Africa has not so far
                seen the death rates experienced on other continents.
              </p>
              <p>
                Moeti said early action by African countries had helped keep the
                numbers low - but constant vigilance was still needed.
              </p>
              <p>
                The US remains the worst-affected country worldwide, passing 2
                million infections on Thursday. Spikes have been recorded in
                several states, including Arizona, which is confirming more than
                1,000 cases daily.
              </p>
              <p>
                US president Donald Trump has introduced a policy stopping
                attendees at his rallies from suing the campaign or venue if
                they contract coronavirus at the events. A statement on the
                campaign website page for a rally in Tulsa says: “By clicking
                register below, you are acknowledging that an inherent risk of
                exposure to COVID-19 exists in any public place where people are
                present. By attending the Rally, you and any guests voluntarily
                assume all risks related to exposure to COVID-19 and agree not
                to hold Donald J. Trump for President, Inc.; BOK Center; ASM
                Global; or any of their affiliates … liable for any illness or
                injury.”
              </p>
              <p>
                Stocks fell sharply Thursday on Wall Street as coronavirus cases
                increased, deflating recent optimism for a quick economic
                recovery. The DOW Jones Industrial Average saw its worst day in
                weeks, closing down almost 7%. Asian shares were moderately
                lower on Friday as a result of the overnight rout.
              </p>
              <p>
                The US Federal Reserve warned on Wednesday that a second wave of
                infections risks prolonging the country’s recovery. The Fed
                predicted unemployment will still be at around 9% by December –
                close to the worst levels seen in the GFC – but Federal Reserve
                chair Jerome Powell said that a second outbreak could mean that
                figure was optimistic.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
