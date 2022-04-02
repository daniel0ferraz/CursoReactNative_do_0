import React from 'react';

import { View, FlatList, StyleSheet, Dimensions, Text } from 'react-native';

import logo from '../../../assets/logo.png';
import Detalhes from '../../components/Detalhes';
import Topo from '../../components/Topo';
import Item from '../../components/Item';

const width = Dimensions.get('screen').width;

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Text style={estilos.titulo}>{itens.titulo}</Text>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
