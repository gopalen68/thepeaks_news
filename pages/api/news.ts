const str_api_key = `api-key=${process.env.API_KEY}`;

export async function getTopStoriesNews(section: string) {
  const news = await getNews(section);

  const news_arr = {
    cardbg: news[0],
    cardmd: [news[1], news[2]],
    cardNoImg: [news[3], news[4]],
    cardCatNews: [news[5], news[6], news[7]],
  };

  return news_arr;
}

export async function getNews(
  section: string,
) {
  const url = await getApiUrlSection(section);
  const news = await getNewsbyApiUrl(url);

  for (let i = 0; i < news.length; i++) {
    const api_url = news[i].apiUrl;
    const news_media = await getNewsMedia(api_url);
    const news_content = await getNewsContent(api_url);

    Object.assign(news[i], {
      news_content: { ...news_content },
      news_media: { ...news_media },
    });
  }

  return news;
}

export async function getNewsDetail(url: string) {
  const news_details = await fetch(`${url}?${str_api_key}`);
  const news_details_data = await news_details.json();
  const news_media = await getNewsMedia(url);
  const news_content = await getNewsContent(url);

  const news_details_arr = { ...news_details_data.response.content }

  Object.assign(news_details_arr, {
    news_content: { ...news_content },
    news_media: { ...news_media },
  });

  return news_details_arr;
}

export async function getApiUrlSection(section: string) {
  const section_api_url = await fetch(
    `${process.env.API_URL}/sections?q=${section}&${str_api_key}`
  );
  const data = await section_api_url.json();

  const url = data.response.results[0].apiUrl;

  return url;
}

export async function getNewsbyApiUrl(url: string) {
  const news_arr = await fetch(`${url}?${str_api_key}&order-by=newest`);
  const data_news_arr = await news_arr.json();

  const news = [...data_news_arr.response.results];

  return news;
}

export async function getNewsContent(apiUrl: string) {
  const news_detail = await fetch(
    `${apiUrl}?${str_api_key}&show-blocks=body&show-elements=all&show-fields=headline`
  );
  const news_content_data = await news_detail.json();

  const news_content = {
    headline: news_content_data.response.content.fields.headline,
    bodyHtml: news_content_data.response.content.blocks.body[0].bodyHtml,
    bodyTextSummary:
      news_content_data.response.content.blocks.body[0].bodyTextSummary,
  };

  return news_content;
}

export async function getNewsMedia(apiUrl: string) {
  const news_media = await fetch(
    `${apiUrl}?${str_api_key}&show-blocks=main&show-elements=all`
  );
  const news_media_data = await news_media.json();

  const media_content = {
    news_img: news_media_data.response.content.blocks
      ? news_media_data.response.content.blocks.main.elements[0].assets[2].file
      : "https://i.ibb.co/ZdxCzny/The-Peaks-Bg.png",
    news_img_meta: {
      caption: news_media_data.response.content.blocks
        ? news_media_data.response.content.blocks.main.elements[0].imageTypeData
            .caption
        : "",
      alt: news_media_data.response.content.blocks
        ? news_media_data.response.content.blocks.main.elements[0].imageTypeData
            .alt
        : "",
    },
  };

  return media_content;
}

