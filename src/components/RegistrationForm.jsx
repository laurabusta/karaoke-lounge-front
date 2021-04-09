import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class RegistrationForm extends React.Component {
    render() {
        return (
            <View>
                <Text>Registration Form</Text>
            </View>
        )
    }
}

export default RegistrationForm

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20,
    },
})