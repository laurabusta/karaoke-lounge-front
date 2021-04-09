import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'

class Footer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ButtonGroup
                    onPress= { this.onPressButtonGroup }
                    buttons= {['logs', 'songs', 'users', 'profile']}
                />
            </View>
        )
    }
}

export default Footer

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50
    },
})