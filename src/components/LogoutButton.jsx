import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class LogoutButton extends React.Component {
    constructor(props) {
        super(props)
        this.onPressLogout = this.onPressLogout.bind(this)
    }

    onPressLogout() {
        // logout user on backend server
        // then logout user on frontend
        fetch(this.props.baseURL + this.props.profileRoute + '/logout', {
            method: 'POST'
        })
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text 
                    style={ styles.logoutText }
                    onPress={ this.props.logoutCurrentUser }
                >Logout
                </Text>
            </View>
        )
    }
}

export default LogoutButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        width: '100%',
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingVertical: 5,
        paddingHorizontal: 15
    },
    logoutText: {
        color: '#147EFB',
        fontSize: 16,
        fontWeight: 'bold'
    }
})