import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AssociacaoImagens = ({ onImagemSelecionada }) => {
  const [imagem, setImagem] = useState(null);

  // Função para selecionar uma imagem da galeria
  const selecionarImagem = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Verificar se a seleção de imagem foi cancelada
    if (resultado.canceled === false) {
      // Definir a imagem selecionada no estado
      setImagem(resultado.assets && resultado.assets.length > 0 ? resultado.assets[0].uri : null);
      // Chamar a função de callback para enviar a imagem selecionada para o componente pai
      onImagemSelecionada(resultado.assets && resultado.assets.length > 0 ? resultado.assets[0].uri : null);
    }
  };

  return (
    <View style={styles.container}>
      {/* Exibir a imagem selecionada, se houver */}
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
      
      {/* Botão para selecionar imagem */}
      <Pressable onPress={selecionarImagem} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Selecionar Imagem</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    padding: 8,
    width: '98%',
    margin: 5,
    elevation: 3,
    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: '#00ff00',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 0.25,
  },
});

export default AssociacaoImagens;
