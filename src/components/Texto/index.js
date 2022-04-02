import React from 'react';

import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }) {
  let styles = style.texto;

  if (style?.fontWeight === 'bold') {
    style = styles.textoNegrito;
  }
  return <Text style={[style, styles.texto]}>{children}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
  },

  textoNegrito: {
    fontFamily: 'MontserratBold',
  },
});
