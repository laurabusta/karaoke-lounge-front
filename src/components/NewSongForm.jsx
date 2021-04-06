import React from 'react'
import { View, StyleSheet, StatusBar, Alert } from 'react-native'
import { Overlay, Input, Text, Card, Button, Icon } from 'react-native-elements'
import { Modal } from 'react-native-web'

class NewSongForm extends React.Component {
    onPressAddToList() {
        this.props.setModalVisible(false)
        // this.setState({
        //     showNewSongForm: true,
        //     showSongList: false
        // })
    }
    render () {
        return (
            <View>
                {/* <Card style={{ width:'100%' }}> */}
                    {/* <Card.Title>Add New Song</Card.Title> */}
                    {/* <Input
                        placeholder='title'
                    />
                    <Input
                        placeholder='artist'
                    />
                    <Input
                        placeholder='song code'
                    />
                    <Input
                        placeholder='image URL'
                    /> */}
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
                            // Alert.alert("Add to List?") 
                            // console.log("Add to List?")
                            this.onPressAddToList()
                            }
                        }
                    />
                {/* </Card> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    }
})

export default NewSongForm