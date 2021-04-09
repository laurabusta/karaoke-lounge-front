import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Icon, Text, Button } from 'react-native-elements'

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            nickname: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleNicknameChange = this.handleNicknameChange.bind(this)
        this.onPressJoin = this.onPressJoin.bind(this)

    }

    handleUsernameChange(text) {
        this.setState({
            username: text
        })
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

    handleNicknameChange(text) {
        this.setState({
            nickname: text
        })
    }

    onPressJoin() {
        console.log('pressed join button! rock on!')
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            nickname: this.state.nickname,
            fave_drink: '',
            fave_genre: '',
            profile_pic_URL: ''
        }
        this.props.registerNewUser(newUser)
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.headingContainer }>
                    <Text h2
                        style={ styles.heading }
                    >
                        Registration Form
                    </Text>
                    <Text h5
                        style = { styles.subHeading }
                    >
                        Get your vocal chords warmed up!
                    </Text>
                </View>
                <Input
                    label = 'username'
                    placeholder = 'username'
                    leftIcon = {{
                        name: 'user',
                        type: 'font-awesome'
                    }}
                    style = { styles.inputText }
                    leftIconContainerStyle = { styles.leftIcon }
                    onChangeText = { this.handleUsernameChange }
                />
                <Input
                    label = 'email address'
                    placeholder = 'email address'
                    leftIcon = {{
                        name: 'envelope',
                        type: 'font-awesome'
                    }}
                    style = { styles.inputText }
                    leftIconContainerStyle = { styles.leftIcon }
                    autoCapitalize = "none"
                    textContentType = "emailAddress"
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
                    onChangeText = { this.handlePasswordChange }
                />
                <Input
                    label = 'nickname'
                    placeholder = 'nickname'
                    leftIcon = {{
                        name: 'star',
                        type: 'font-awesome'
                    }}
                    style = { styles.inputText }
                    leftIconContainerStyle = { styles.leftIcon }
                    onChangeText = { this.handleNicknameChange }
                />
                <Button 
                    title='Join'
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
                    onPress = { this.onPressJoin }
                />
            </View>
        )
    }
}

export default RegistrationForm

const styles=StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20,
    },
    headingContainer: {
        margin: 30,
        // backgroundColor: 'red'
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
})