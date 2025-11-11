import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import ArticleCard from '../view/components/ArticleCard';
import { useFeedViewModel } from '../viewmodel/useFeedViewModel';

export default function Home() {
  const { articles, loading, error, search, setSearch, refresh, refreshing, loadFeed } = useFeedViewModel();
  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  const handleSearch = () => {
    const term = localSearch.trim();
    setSearch(term);
    loadFeed(term);
  };

  if (loading)
    return (
      <View style={styles.center}>
        <Animatable.View animation="pulse" iterationCount="infinite">
          <ActivityIndicator size="large" color="#4a90e2" />
        </Animatable.View>
        <Text style={styles.loadingText}>Carregando notícias...</Text>
      </View>
    );

  {error && <Text style={styles.error}>{error}</Text>}

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Buscar notícias..." 
          placeholderTextColor="#8a94a6"
          value={search} 
          onChangeText={setSearch} 
          onSubmitEditing={handleSearch} 
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ArticleCard 
            article={item} 
            onPress={() => router.push({ pathname: '/details', params: { article: JSON.stringify(item) } })} 
          />
        )}
        keyExtractor={item => item.url}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma notícia encontrada.</Text>}
        refreshing={refreshing}
        onRefresh={refresh}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#eef1f6' 
  },
  searchContainer: { 
    flexDirection: 'row', 
    marginBottom: 16, 
    alignItems: 'center' 
  },
  searchInput: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#d0d4db', 
    padding: 12, 
    borderRadius: 12, 
    backgroundColor: '#fff',
    fontFamily: 'Poppins_400Regular',
    color: '#333'
  },
  searchButton: { 
    backgroundColor: '#4a90e2', 
    paddingVertical: 12, 
    paddingHorizontal: 16, 
    borderRadius: 12, 
    marginLeft: 10 
  },
  searchButtonText: { 
    color: '#fff', 
    fontFamily: 'Poppins_600SemiBold' 
  },
  listContent: { 
    paddingBottom: 20 
  },
  separator: { 
    height: 10 
  },
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#eef1f6' 
  },
  loadingText: { 
    fontFamily: 'Poppins_400Regular', 
    color: '#4a90e2', 
    marginTop: 8, 
    fontSize: 16 
  },
  error: { 
    color: '#e74c3c', 
    textAlign: 'center', 
    fontFamily: 'Poppins_500Medium', 
    marginTop: 40 
  },
  emptyText: { 
    textAlign: 'center', 
    color: '#7b8ca4', 
    fontFamily: 'Poppins_400Regular', 
    marginTop: 30 
  },
});
