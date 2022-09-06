import {XMLParser} from 'fast-xml-parser';

const options = {
  ignoreAttributes: false,
};
const parser = new XMLParser(options);

const fecthRSS = async (url: string): Promise<{data: any; error: any}> => {
  let data: any;
  let error: any;
  try {
    const res = await fetch(url);
    const xml = await res.text();
    data = parser.parse(xml).rss.channel;
  } catch (_error) {
    console.log({error: _error});
    error = _error;
  } finally {
    return {
      data,
      error,
    };
  }
};

export default fecthRSS;
