import React from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';

import Cesta from './src/screens/Cesta';
import Mock from './src/Mocks/cesta';

export default function App() {
  if (!Mock) {
    <Text>Carregado...</Text>;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...Mock} />
    </SafeAreaView>
  );
}
