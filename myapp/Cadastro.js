import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import AssociacaoImagens from '../AssociacaoImagens/AssociacaoImagens';

const CadastroFornecedor = ({ onCadastro }) => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [imagemUri, setImagemUri] = useState('');

  const handleCadastro = () => {
    const novoFornecedor = { id: Math.random().toString(), nome, categoria, endereco, contato, imagemUri };
    setNome('');
    setCategoria('');
    setEndereco('');
    setContato('');
    setImagemUri('');
    onCadastro(novoFornecedor);
  };

  return (
    <View style={styles.container}>
      {/* Inputs para o cadastro */}
      <TextInput placeholder="Nome" placeholderTextColor="#00ff00" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Categoria" placeholderTextColor="#00ff00" value={categoria} onChangeText={setCategoria} style={styles.input} />
      <TextInput placeholder="Endereço" placeholderTextColor="#00ff00" value={endereco} onChangeText={setEndereco} style={styles.input} />
      <TextInput placeholder="Contato" placeholderTextColor="#00ff00" value={contato} onChangeText={setContato} style={styles.input} />
      
      {/* Componente de associação de imagens */}
      <View style={styles.imagemButton}>
        <AssociacaoImagens onImagemSelecionada={setImagemUri} />
      </View>
      
      {/* Botão de cadastro */}
      <Pressable onPress={handleCadastro} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#000000' },
  buttonContainer: { padding: 8, margin: 5, elevation: 3, backgroundColor: '#000000', borderWidth: 2, borderColor: '#00ff00', borderRadius: 10 },
  buttonText: { color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 20, letterSpacing: 0.25 },
  input: { height: 40, borderColor: '#00ff00', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, borderRadius: 10, color: '#00ff00' },
  imagemButton: { paddingTop: 20 },
});

export default CadastroFornecedor;
