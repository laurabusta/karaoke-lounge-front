import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Input, Button, Icon, Text } from 'react-native-elements'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.onPressLogin = this.onPressLogin.bind(this)
    }

    handleEmailChange(text) {
        this.setState({
            email: text
        })
    }

    handlePasswordChange(text) {
        this.setState({
            password: text
        })
    }

    onPressLogin() {
        Alert.alert('login button pressed!')
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text h2
                        style = { styles.heading }
                    >
                        Welcome to the Karaoke Lounge! 
                    </Text>
                    <Text h5
                        style = { styles.subHeading }
                    >
                        Please check in with the host...
                    </Text>
                </View>
                <Input
                    label = 'email address'
                    placeholder = 'email address'
                    leftIcon = {{
                        name: 'envelope',
                        type: 'font-awesome'
                    }}
                    style = { styles.inputText }
                    leftIconContainerStyle = { styles.leftIcon }
                    autoCapitalize = { false }
                    onChangeText = { this.handleEmailChange }
                />
                <Input
                    label = 'password'
                    placeholder = 'password'
                    leftIcon = {{
                        name: 'lock',
                        type: 'font-awesome',
                        size: 30
                    }}
                    secureTextEntry = { true }
                    style = { styles.inputText }
                    leftIconContainerStyle = { styles.leftIcon }
                />
                <Button 
                    title='Login'
                    icon = {
                        <Icon 
                            name = 'login'
                            type = 'entypo'
                            color = '#fff'
                            style = { styles.buttonIcon }
                        />
                    }
                    containerStyle = { styles.buttonContainer }
                    buttonStyle = { styles.button }
                    onPress = { this.onPressLogin }
                />
            </View>
        )
    }
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20,
    },
    headingContainer: {
        margin: 30
    },
    heading: {
        // fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    subHeading: {
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    inputText: {
        padding: 0
    },
    leftIcon: {
        width: 40,
        alignItems: 'center'
    },
    buttonIcon: {
        paddingRight: 10
    },
    buttonContainer: {
        // backgroundColor: 'red',
        padding: 20
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30
    }
});