import React from 'react'
import { View, Pressable, Text } from 'react-native'

class UpdateSongForm extends React.Component {
    render() {
        return (
            <View>
                <Pressable onPress={() => this.props.setUpdateModalVisible(false)}>
                    <Text>Press Me!</Text>
                </Pressable>
            </View>
        )
    }
}

export default UpdateSongForm