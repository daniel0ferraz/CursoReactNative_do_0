import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ children }) {
  return (
    <TouchableOpacity style={estilos.botao}>
      <Text style={estilos.textoBotao}>{children}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
