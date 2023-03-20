import CategoryNews from "@/components/CategoryNews";
import TopStory from "@/components/TopStory";

import { getHomePageNews } from "./api/news";

export default function Home({ top_stories, sports }: any) {
  return (
    <div className="container">
      <main className="main__wrapper">
        <TopStory stories={top_stories} />
        <CategoryNews hasTitle={true} title="Sports" news={sports} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const news_arr = await getHomePageNews();

  return {
    props: {
      top_stories: news_arr.top_stories,
      sports: news_arr.sports,
    },
  };
}
