// start app from terminal with >> npm start

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import SongContainer from './src/components/SongContainer'
import Header from './src/components/Header'

class App extends React.Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <SongContainer />
      </SafeAreaView>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
