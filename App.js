// start app from terminal with >> npm start

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal } from 'react-native'
import SongContainer from './src/components/SongContainer'
import Header from './src/components/Header'
import RegistrationLoginView from './src/components/RegistrationLoginView'
import LogoutButton from './src/components/LogoutButton'

const baseURL = 'http://localhost:8000/api/v1'
const profileRoute = '/profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: baseURL,
      profileRoute: profileRoute,
      currentUser: {}, // expects object, .data without status info
      modalLoginVisible: false,
      showLogoutButtonView: false,
      showRegistrationLoginView: true,
      showSongContainer: false
    }
    this.handleVerifiedUser = this.handleVerifiedUser.bind(this)
    this.updateCurrentUser = this.updateCurrentUser.bind(this)
    this.logoutCurrentUser = this.logoutCurrentUser.bind(this)
    this.viewSongListView = this.viewSongListView.bind(this)
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
    this.viewSongListView()
  }

  logoutCurrentUser() {
    console.log("user logged out!")
    this.setState({
      currentUser: {},
      showLogoutButtonView: false,
      showRegistrationLoginView: true,
      showSongContainer: false
    })
  }

  viewSongListView() {
    this.setState({
      showLogoutButtonView: true,
      showRegistrationLoginView: false,
      showSongContainer: true,
    })
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        {/* render app Header */}
        <Header 
          baseURL = { this.state.baseURL }
          profileRoute = { this.state.profileRoute }
          logoutCurrentUser = { this.logoutCurrentUser }
        />

        {/* logout button, only render when logged in */}
        {
          this.state.showLogoutButtonView &&
          <LogoutButton 
            logoutCurrentUser = { this.logoutCurrentUser }
          />
        }

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
