import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import LoginForm from './LoginForm'

let baseURL = 'http://localhost:8000/api/v1/profile'

class RegistrationLoginView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoginForm: true
        }
        this.handleLoginRequest = this.handleLoginRequest.bind(this)
    }

    handleLoginRequest(userCredentials) {
        // fetch post to login
        // on successful login gets current_user profile (get user function on app.js component), show songs/default start page
        console.log("userCredentials")
        console.log(userCredentials)
        fetch(baseURL + '/login', {
            method: 'POST',
            body: JSON.stringify(userCredentials),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(resJson => {
            console.log("user logged in!")
            console.log(resJson)
            this.props.handleVerifiedUser(resJson)
        }, err => console.error(err))
    }

    render() {
        return (
            <View style={ styles.container }>
                <View>
                    {/* <Text>Welcome to the Karaoke Lounge!</Text> */}
                </View>
                {  
                    this.state.showLoginForm &&
                    <LoginForm 
                        handleLoginRequest = { this.handleLoginRequest }
                    />
                }

            </View>
        )
    }
}

export default RegistrationLoginView

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  });