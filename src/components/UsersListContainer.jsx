import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class UsersListContainer extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text>Users List Container</Text>
            </View>
        )
    }
}

export default UsersListContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        width: '100%',
        alignItems: 'center',
    }
})