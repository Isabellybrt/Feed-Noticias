type Article = {
  title: string;
  description: string;
  urlToImage: string | null;
  source: { name: string };
  publishedAt: string;
  content: string;
  url: string;  
};

export default Article;