import React from 'react'
import { View, Text } from 'react-native'
import { Overlay } from 'react-native-elements'
import { Modal } from 'react-native-web'

class NewSongForm extends React.Component {
    render () {
        return (
            <View>
                {/* <Overlay
                    isVisible={ this.props.visible }
                    ModalComponent={ Modal }
                > */}
                    <Text>Hello World</Text>
                {/* </Overlay> */}
            </View>
        )
    }
}

export default NewSongForm