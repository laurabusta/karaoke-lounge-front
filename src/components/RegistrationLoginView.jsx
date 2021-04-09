import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LoginForm from './LoginForm'

class RegistrationLoginView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoginForm: true
        }
    }
    render() {
        return (
            <View style={ styles.container }>
                <View>
                    <Text>Welcome to the Karaoke Lounge!</Text>
                </View>
                {  
                    this.state.showLoginForm &&
                    <LoginForm />
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