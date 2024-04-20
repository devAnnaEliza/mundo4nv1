import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ListagemFornecedores = ({ fornecedores }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de Fornecedores:</Text>
      {fornecedores.map((fornecedor) => (
        <View key={fornecedor.id} style={styles.fornecedorContainer}>
          {/* Exibição da imagem do fornecedor */}
          <View>
            <Image
              source={{ uri: fornecedor.imagemUri }}
              style={styles.imagem}
            />
          </View>
          
          {/* Detalhes do fornecedor */}
          <View style={styles.detalhesContainer}>
            <Text style={styles.fornecedorNome}>{fornecedor.nome}</Text>
            <Text style={styles.fornecedorDados}>{fornecedor.categoria}</Text>
            <Text style={styles.fornecedorDados}>{fornecedor.endereco}</Text>
            <Text style={styles.fornecedorDados}>{fornecedor.contato}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10,
    color: '#00ff00',
  },
  fornecedorContainer: {
    borderBottomWidth: 1,
    borderColor: '#00ff00',
    borderStyle: 'dotted',
    paddingVertical: 10,
    width: '100%' ,
    marginBottom: 10,    
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  detalhesContainer: {
    flex: 1,
    marginLeft: 20,
  },
  fornecedorNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ff00',
  },
  fornecedorDados: {
    fontSize: 14,
    color: '#00ff00',
  },
});

export default ListagemFornecedores;
