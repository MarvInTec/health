import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderImc from './src/componentes/HeaderImc';
import ContentImc from './src/componentes/ContentImc';
import FooterImc from './src/componentes/FooterImc';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderImc/>
      <ContentImc/>
      <FooterImc/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
