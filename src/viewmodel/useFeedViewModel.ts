import { useState } from 'react';
import Article from '../model/entities/Article';
import NewsService from '../model/services/NewsService';

export function useFeedViewModel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState<string>('Inteligencia Artificial');
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const service = new NewsService();

  const loadFeed = async (term: string = search, isRefresh: boolean = false) => {
    const q = term.trim() === '' ? 'notícias' : term;
    setLoading(!isRefresh);
    setRefreshing(isRefresh);
    setError(null);
    try {
      const data = await service.getNews(q);
      if (data.length === 0) {
        setError('Nenhuma notícia encontrada.');
        setArticles([]);
      } else {
        setArticles(data);
      }
    } catch (err: any) {
      setError('Erro ao carregar notícias.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const refresh = () => loadFeed(search, true);

  return { articles, loading, refreshing, error, search, setSearch, refresh, loadFeed };
}
