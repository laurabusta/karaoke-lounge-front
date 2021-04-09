import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

// let baseURL = 'http://localhost:8000/api/v1/profile'

class RegistrationLoginView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoginForm: true,
            showRegistrationForm: false,
            selectedIndex: 0,
        }
        this.handleLoginRequest = this.handleLoginRequest.bind(this)
        this.onPressButtonGroup = this.onPressButtonGroup.bind(this)
        this.viewLoginForm = this.viewLoginForm.bind(this)
        this.viewRegistrationForm = this.viewRegistrationForm.bind(this)
        this.registerNewUser = this.registerNewUser.bind(this)
    }

    handleLoginRequest(userCredentials) {
        // fetch post to login
        // on successful login gets current_user profile (get user function on app.js component), show songs/default start page
        console.log("userCredentials")
        console.log(userCredentials)
        fetch(this.props.baseURL + this.props.profileRoute + '/login', {
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

    registerNewUser(newUser) {
        console.log('registerNewUser')
        console.log(newUser)
    }

    viewLoginForm() {
        this.setState({
            showLoginForm: true,
            showRegistrationForm: false
        })
    }

    viewRegistrationForm() {
        this.setState({
            showLoginForm: false,
            showRegistrationForm: true
        })
    }

    onPressButtonGroup(selectedIndex) {
        switch(selectedIndex) {
            case 0:
                console.log('login view button pressed')
                this.viewLoginForm()
                break
            case 1:
                console.log('registration view button pressed')
                this.viewRegistrationForm()
                break
            default:
                console.log('selected Index does not exist')
        }
        this.setState({
            selectedIndex: selectedIndex
        })
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
                {
                    this.state.showRegistrationForm &&
                    <RegistrationForm
                        registerNewUser = { this.registerNewUser }
                    />
                }
                <ButtonGroup
                    onPress={ this.onPressButtonGroup }
                    selectedIndex = { this.state.selectedIndex }
                    buttons={ ['Login', 'Register'] }
                />

            </View>
        )
    }
}

export default RegistrationLoginView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    //   backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
  });