import React from 'react';

import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';

import logo from '../../../assets/logo.png';
import Detalhes from '../../components/Detalhes';
import Topo from '../../components/Topo';

const width = Dimensions.get('screen').width;

export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Topo {...topo} />

      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
