import React from 'react'
import { View, StyleSheet, StatusBar, Alert } from 'react-native'
import { Overlay, Input, Text, Card, Button, Icon } from 'react-native-elements'
import { Modal } from 'react-native-web'

class NewSongForm extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                {/* <Overlay
                    isVisible={ this.props.visible }
                    ModalComponent={ Modal }
                > */}
                    {/* <Text>Hello World</Text> */}
                {/* </Overlay> */}
                {/* <Text h4>Add New Song</Text> */}
                <Card>
                    <Card.Title>Add New Song</Card.Title>
                    <Input
                        placeholder='title'
                    />
                    <Input
                        placeholder='artist'
                    />
                    <Input
                        placeholder='song code'
                    />
                    <Button
                        type='clear'
                        icon={
                            <Icon 
                                name='check'
                                type='font-awesome'
                                color='#007AFF'
                            />
                        }
                        title="  Submit"
                        onPress={ () => {  
                            Alert.alert("Add to List?") 
                            console.log("Add to List?")
                            }
                        }
                    />
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
})

export default NewSongForm