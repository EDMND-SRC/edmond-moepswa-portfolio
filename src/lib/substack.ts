import Parser from 'rss-parser';

export async function getSubstackPosts() {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL('https://edmnd.substack.com/feed');
    return feed.items.slice(0, 3).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet?.slice(0, 150) + '...',
    }));
  } catch (error) {
    console.error('Error fetching Substack feed:', error);
    return [];
  }
}
