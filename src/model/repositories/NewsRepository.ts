import axios from 'axios';

const API_KEY = 'f630ea65a6d340cb8c705652c2441a36';
const BASE_URL = 'https://newsapi.org/v2/everything';

export default class NewsRepository {
  async fetchNews(query: string = 'Inteligencia Artificial', language: string = 'pt', pageSize: number = 20): Promise<any[]> {
    try {
      const fromDate = new Date();
      fromDate.setMonth(fromDate.getMonth() - 1);  
      const from = fromDate.toISOString().split('T')[0];
      const url = `${BASE_URL}?q=${encodeURIComponent(query)}&language=${language}&sortBy=publishedAt&from=${from}&pageSize=${pageSize}&apiKey=${API_KEY}`;
      const response = await axios.get(url);
      console.log('API Response Status:', response.status);
      return response.data.articles;
    } catch (error: any) {
      console.error('API Error Details:', error.message, error.response?.data);
      throw new Error('Falha na requisição à API de notícias');
    }
  }
}