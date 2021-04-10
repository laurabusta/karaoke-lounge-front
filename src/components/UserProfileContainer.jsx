import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class UserProfileContainer extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text>User Profile Container</Text>
            </View>
        )
    }
}

export default UserProfileContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        width: '100%',
        alignItems: 'center',
    }
})