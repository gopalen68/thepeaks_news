import CategoryNews from "@/components/CategoryNews";
import TopStory from "@/components/TopStory";

import { getNews, getTopStoriesNews } from "./api/news";

export default function Home({ top_stories, sport_news }: any) {
  return (
    <div className="container">
      <main className="main__wrapper">
        <TopStory stories={top_stories} />
        <CategoryNews hasTitle={true} title="Sports" news={sport_news} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const top_stories = await getTopStoriesNews("news");
  const sport_news = await getNews("sport");

  return {
    props: {
      top_stories: top_stories,
      sport_news: sport_news,
    },
  };
}
