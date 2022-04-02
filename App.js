import React from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';

import Cesta from './src/screens/Cesta';
import Mock from './src/Mocks/cesta';
import Itens from './src/components/Itens';

export default function App() {
  if (!Mock) {
    <Text>Carregado...</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...Mock} />
    </SafeAreaView>
  );
}
