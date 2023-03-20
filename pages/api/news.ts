const str_api_key = `api-key=${process.env.API_KEY}`;

export async function getHomePageNews() {
  const top_stories_news = await getNews("news", 8);
  const sports_news = await getNews("sport", 3);

  const news_arr = {
    top_stories: {
      cardbg: top_stories_news[0],
      cardmd: [top_stories_news[1], top_stories_news[2]],
      cardNoImg: [top_stories_news[3], top_stories_news[4]],
      cardCatNews: [
        top_stories_news[5],
        top_stories_news[6],
        top_stories_news[7],
      ],
    },
    sports: sports_news,
  };
  return news_arr;
}

export async function getNews(section: string, pagesize: number) {
  const url = await getApiUrlSection(section);
  const news = await getNewsbyApiUrl(url, pagesize);
  return news;
}

export async function getApiUrlSection(section: string) {
  const section_api_url = await fetch(
    `${process.env.API_URL}/sections?q=${section}&${str_api_key}`
  );
  const data = await section_api_url.json();

  const url = data.response.results[0].apiUrl;

  return url;
}

export async function getNewsbyApiUrl(url: string, pagesize: number) {
  const news_arr = await fetch(
    `${url}?${str_api_key}&order-by=newest&page-size=${pagesize}`
  );
  const data_news_arr = await news_arr.json();

  const news = [...data_news_arr.response.results];
  const news_result = [];

  for (let i = 0; i < news.length; i++) {
    const item_url = news[i].apiUrl;
    const news_content = await getNewsContent(item_url);
    news_result.push(news_content);
  }
  return news_result;
}

export async function getNewsContent(apiUrl: string) {
  const news_detail = await fetch(
    `${apiUrl}?${str_api_key}&show-blocks=all&show-fields=headline`
  );
  const news_content_data = await news_detail.json();
  const news_content = { ...news_content_data.response.content };

  return news_content;
}

export async function getSearchResult(searchQuery: string) {
  const search_api_urls = await fetch(
    `${process.env.API_URL}?q=${searchQuery}&${str_api_key}&page-size=15`
  );
  const search_arr = await search_api_urls.json();

  const search_news = [...search_arr.response.results];
  const search_result = [];
  for (let i = 0; i < search_news.length; i++) {
    const item_url = search_news[i].apiUrl;
    const news_content = await getNewsContent(item_url);
    search_result.push(news_content);
  }
  return search_result;
}
