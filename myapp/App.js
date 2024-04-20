import React, { useState } from 'react';
import { ScrollView, View, Pressable, Text, StyleSheet } from 'react-native';
import Cadastro from 'C:\Users\PC\Documents\GitHub\mundo4nv1\myapp\Cadastro.js';
import Listagem from 'C:\Users\PC\Documents\GitHub\mundo4nv1\myapp\Listagem.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState('cadastro');
  const [fornecedores, setFornecedores] = useState([]);

  const handlePress = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'cadastro':
        return <Cadastro onCadastro={(novoFornecedor) => {
          setFornecedores([...fornecedores, novoFornecedor]);
          setCurrentPage('listagem');
        }} />;
      case 'listagem':
        return <Listagem fornecedores={fornecedores} />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Pressable onPress={() => handlePress('cadastro')} style={styles.button}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </Pressable>
        <Pressable onPress={() => handlePress('listagem')} style={styles.button}>
          <Text style={styles.buttonText}>Listagem</Text>
        </Pressable>
      </View>
      {renderPage()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: { backgroundColor: 'black' },
  container: { flex: 1, justifyContent: 'center', width: '90%', alignSelf: 'center', paddingTop: 100, paddingBottom: 20 },
  button: { padding: 8, margin: 5, elevation: 3, backgroundColor: '#000000', borderWidth: 2, borderColor: '#00ff00', borderRadius: 10 },
  buttonText: { color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 20, letterSpacing: 0.25 },
});

export default App; 