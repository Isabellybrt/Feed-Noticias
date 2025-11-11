import NewsRepository from '../repositories/NewsRepository';
import Article from '../entities/Article';

export default class NewsService {
  private repository: NewsRepository;

  constructor() {
    this.repository = new NewsRepository();
  }

  async getNews(query: string = '', language: string = 'pt', pageSize: number = 20): Promise<Article[]> {
    try {
      const columnArticles = await this.repository.fetchNews(query, language, pageSize);
      return columnArticles.map((item: any) => ({
        title: item.title,
        description: item.description,
        urlToImage: item.urlToImage,
        source: { name: item.source.name },
        publishedAt: item.publishedAt,
        content: item.content,
        url: item.url,
      }));
    } catch (error) {
      throw new Error('Falha ao processar notícias');
    }
  }
}