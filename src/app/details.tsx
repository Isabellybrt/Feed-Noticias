import * as Linking from 'expo-linking';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Article from '../model/entities/Article';

export default function Details() {
  const { article } = useLocalSearchParams();
  const parsedArticle: Article = JSON.parse(article as string);

  const openFullArticle = () => {
    Linking.openURL(parsedArticle.url);
  };

  return (
    <ScrollView style={styles.container}>
      {parsedArticle.urlToImage && (
        <Animatable.Image
          animation="fadeIn"
          duration={800}
          source={{ uri: parsedArticle.urlToImage }}
          style={styles.image}
        />
      )}

      <Animatable.Text animation="fadeInDown" style={styles.title}>
        {parsedArticle.title}
      </Animatable.Text>

      <Text style={styles.source}>
        {parsedArticle.source.name} •{' '}
        {new Date(parsedArticle.publishedAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </Text>

      <Text style={styles.content}>
        {parsedArticle.description || parsedArticle.content || 'Conteúdo não disponível.'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={openFullArticle}>
        <Text style={styles.buttonText}>Ler matéria completa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1f6',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  source: {
    fontSize: 13,
    color: '#7b8ca4',
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 18,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    textAlign: 'justify',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});
