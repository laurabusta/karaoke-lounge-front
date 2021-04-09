// start app from terminal with >> npm start

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal } from 'react-native'
import SongContainer from './src/components/SongContainer'
import Header from './src/components/Header'
import RegistrationLoginView from './src/components/RegistrationLoginView'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {}, // expects object, .data without status info
      modalLoginVisible: false,
      showRegistrationLoginView: false,
      showSongContainer: true
    }
    this.handleVerifiedUser = this.handleVerifiedUser.bind(this)
    this.updateCurrentUser = this.updateCurrentUser.bind(this)
  }

  updateCurrentUser(user) {
    this.setState({
      currentUser: user // expects object, .data without status info
    })
  }

  handleVerifiedUser(user) {
    console.log("verified user")
    console.log(user)
    this.updateCurrentUser(user.data)
    this.setState({
      showRegistrationLoginView: false,
      showSongContainer: true,
    })
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        {/* render app Header */}
        <Header />

        {/* render app registration and login view */}
        {
          this.state.showRegistrationLoginView &&
          <RegistrationLoginView 
            handleVerifiedUser = { this.handleVerifiedUser }
          />
        }

        {/* render Songs Container of all songs */}
        { 
          this.state.showSongContainer &&
          <SongContainer />
        }

        {/* registration and login modal */}
        <View>
          <Modal
            animationType = "slide"
            transparent = { false }
            visible = { this.state.modalLoginVisible }
          >
            <Text>Hello World</Text>
          </Modal>
        </View>
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
    justifyContent: 'flex-start',
  },
});
