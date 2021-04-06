// start app from terminal with >> npm start

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import SongContainer from './src/components/SongContainer'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {/* <Text>Changed App.js to class component structure!</Text> */}
        <SongContainer />
      </View>
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
