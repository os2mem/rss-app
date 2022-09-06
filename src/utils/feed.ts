const formatDate = (date: string) => new Date(date).toLocaleDateString();

const sortByDate = (data: Array<any>): Array<any> => {
  if (!data) return [];
  return [...data]?.sort(
    (itemA, itemB) =>
      new Date(itemA.pubDate).valueOf() - new Date(itemB.pubDate).valueOf(),
  );
};

const searchByTitle = ({
  searchText,
  data,
}: {
  searchText: string | null;
  data: Array<any>;
}) => {
  if (searchText) {
    return data.filter(({title}) => title.match(searchText));
  }
  return data;
};

export default {
  formatDate,
  sortByDate,
  searchByTitle,
};
