// start app from terminal with >> npm start

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal } from 'react-native'
import SongContainer from './src/components/SongContainer'
import Header from './src/components/Header'
import RegistrationLoginView from './src/components/RegistrationLoginView'
import LogoutButton from './src/components/LogoutButton'
import Footer from './src/components/Footer'
import ActivityLogContainer from './src/components/ActivityLogContainer'
import UserProfileContainer from './src/components/UserProfileContainer'
import UsersListContainer from './src/components/UsersListContainer'

const baseURL = 'http://localhost:8000/api/v1'
const profileRoute = '/profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: baseURL,
      profileRoute: profileRoute,
      currentUser: {}, // expects object, .data without status info
      modalLoginVisible: false, // delete this no longer needed
      showLogoutButtonView: false, //
      showRegistrationLoginView: true, //
      showActivityLogContainer: false,
      showSongContainer: false, //
      showUserProfileContainer: false,
      showUsersListContainer: false,
      showFooter: false //
    }
    this.handleVerifiedUser = this.handleVerifiedUser.bind(this)
    this.updateCurrentUser = this.updateCurrentUser.bind(this)
    this.logoutCurrentUser = this.logoutCurrentUser.bind(this)
    this.viewActivityLogContainer = this.viewActivityLogContainer.bind(this)
    this.viewSongListContainer = this.viewSongListContainer.bind(this)
    this.viewUsersListContainer = this.viewUsersListContainer.bind(this)
    this.viewUserProfileContainer = this.viewUserProfileContainer.bind(this)
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
    this.viewSongListContainer()
  }

  logoutCurrentUser() {
    console.log("user logged out!")
    this.setState({
      currentUser: {},
      showLogoutButtonView: false,
      showRegistrationLoginView: true,
      showSongContainer: false,
      showFooter: false
    })
  }

  viewActivityLogContainer() {
    this.setState({
      showLogoutButtonView: true, 
      showRegistrationLoginView: false, 
      showActivityLogContainer: true,
      showSongContainer: false, 
      showUserProfileContainer: false,
      showUsersListContainer: false,
      showFooter: true
    })
  }

  viewSongListContainer() {
    this.setState({
      showLogoutButtonView: true,
      showRegistrationLoginView: false,
      showActivityLogContainer: false,
      showSongContainer: true,
      showUserProfileContainer: false,
      showUsersListContainer: false,
      showFooter: true,
    })
  }

  viewUsersListContainer() {
    this.setState({
      showLogoutButtonView: true,
      showRegistrationLoginView: false,
      showActivityLogContainer: false,
      showSongContainer: false,
      showUserProfileContainer: false,
      showUsersListContainer: true,
      showFooter: true,
    })
  }

  viewUserProfileContainer() {
    this.setState({
      showLogoutButtonView: true,
      showRegistrationLoginView: false,
      showActivityLogContainer: false,
      showSongContainer: false,
      showUserProfileContainer: true,
      showUsersListContainer: false,
      showFooter: true,
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
            baseURL = { this.state.baseURL }
            profileRoute = { this.state.profileRoute }
            handleVerifiedUser = { this.handleVerifiedUser }
          />
        }

        {/* render Activity Log Container of all logs */}
        {
          this.state.showActivityLogContainer &&
          <ActivityLogContainer />
        }

        {/* render Songs Container of all songs */}
        { 
          this.state.showSongContainer &&
          <SongContainer />
        }

        {/* render Users List Container of all users */}
        {
          this.state.showUsersListContainer &&
          <UsersListContainer />
        }

        {/* render User Profile Container */}
        {
          this.state.showUserProfileContainer &&
          <UserProfileContainer />
        }

        {/* render app Footer with navigation buttons */}
        {
          this.state.showFooter &&
          <Footer 
            viewActivityLogContainer = { this.viewActivityLogContainer }
            viewSongListContainer = { this.viewSongListContainer }
            viewUserProfileContainer = { this.viewUserProfileContainer }
            viewUsersListContainer = { this.viewUsersListContainer }
          />
        }

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
