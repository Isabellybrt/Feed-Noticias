import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useLoginViewModel } from '../viewmodel/useLoginViewModel';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userId, loading, error, handleLogin } = useLoginViewModel();

  useEffect(() => {
    if (userId) {
      router.replace('/home');
    } else {
      setEmail('');
      setPassword('');
    }
  }, [userId, error]);

  if (loading) {
    return (
      <View style={styles.center}>
        <Animatable.View animation="pulse" iterationCount="infinite">
          <ActivityIndicator size="large" color="#4a90e2" />
        </Animatable.View>
        <Text style={styles.loadingText}>Entrando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" style={styles.title}>
        NewsFeed+
      </Animatable.Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#8a94a6"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#8a94a6"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin(email, password)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {error && <Text style={styles.error}>Erro: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#eef1f6',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4a90e2',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d0d4db',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 16,
    borderRadius: 12,
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#333',
    elevation: 2,
  },
  loginButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  error: {
    color: '#e74c3c',
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef1f6',
  },
  loadingText: {
    fontFamily: 'Poppins_400Regular',
    color: '#4a90e2',
    marginTop: 8,
    fontSize: 16,
  },
});
