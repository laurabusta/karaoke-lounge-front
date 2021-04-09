import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class LogoutButton extends React.Component {
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
        fontSize: 16
    }
})