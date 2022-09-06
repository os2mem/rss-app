const url = 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml';

const getImage = (item: any) => item?.['media:content']?.['@_url'];

const adapter = (data: any) => {
  if (!data?.item) return [];
  const items = data?.item?.map((item: any, index: number) => {
    return {
      id: index,
      ...item,
      title: item.title.trim(),
      description: item.description.trim(),
      image: getImage(item),
    };
  });
  return items;
};

export default {
  url,
  adapter,
};
