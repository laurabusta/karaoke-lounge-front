import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

class ActivityLogContainer extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text>Activity Log Container</Text>
            </View>
        )
    }
}

export default ActivityLogContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
    }
})