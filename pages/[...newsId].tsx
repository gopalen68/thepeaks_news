import NewsDetail from "@/components/NewsDetail";

import { getNewsContent } from "./api/news";

export default function PageDetail({ news_content }: any) {
  return (
    <>
      <NewsDetail news_content={news_content} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const newsId = context.params.newsId;
  const url = `${process.env.API_URL}/${newsId[0]}`;
  const news_content = await getNewsContent(url);

  return {
    props: {
      news_content: news_content,
    },
  };
}
