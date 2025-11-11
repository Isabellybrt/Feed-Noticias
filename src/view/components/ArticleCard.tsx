import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Article from '../../model/entities/Article';

interface ArticleCardProps {
  article: Article;
  onPress: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {article.description}
        </Text>
        <Text style={styles.source}>
          {`${article.source.name} • ${new Date(article.publishedAt).toLocaleDateString('pt-BR')}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9fb',
    borderRadius: 18,
    padding: 14,
    marginVertical: 10,
    shadowColor: '#5c6bc0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 15,
    marginBottom: 10,
  },
  content: {
    gap: 6,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2c3e50',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#5f6a7d',
  },
  source: {
    fontSize: 12,
    color: '#7b8ca4',
    fontFamily: 'Poppins_300Light',
    marginTop: 5,
  },
});

export default ArticleCard;
