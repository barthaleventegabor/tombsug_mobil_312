/*
 * File: App.js
 * Author: Bartha Levente
 * Copyright: 2026, Bartha Levente
 * Group: IN
 * Date: 2026-03-11
 * Github: https://github.com/barthaleventegabor/
 * Licenc: MIT
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
