import React from 'react';

import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';

import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Text style={styles.Title}>Detalhe da cesta</Text>

      <View style={styles.cesta}>
        <Text style={styles.nome}>Cesta de verduras</Text>
        <Text style={styles.nomeFazenda}>Jenny jack farm</Text>
        <Text style={styles.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Text>
        <Text style={styles.preco}>R$ 40,00</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  Title: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: '#FFF',
    fontWeight: 'bold',
    padding: 16,
  },
  cesta: {},
  nome: {},
  nomeFazenda: {},
  descricao: {},
  preco: {},
});
