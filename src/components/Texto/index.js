import React from 'react';

import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children }) {
  return <Text style={styles.texto}>{children}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
  },

  textoNegrito: {
    fontFamily: 'MontserratBold',
  },
});
