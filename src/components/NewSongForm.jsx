import React from 'react'
import { View, StyleSheet, StatusBar, Alert, TextInput } from 'react-native'
import { Overlay, Input, Text, Card, Button, Icon } from 'react-native-elements'
import { Modal } from 'react-native-web'

class NewSongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            songCode: '',
            imageURL: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleArtistChange = this.handleArtistChange.bind(this)
        this.handleSongCodeChange = this.handleSongCodeChange.bind(this)
        this.handleImageURLChange = this.handleImageURLChange.bind(this)
    }

    handleTitleChange(text) {
        this.setState({
            title: text
        })
    }

    handleArtistChange(text) {
        this.setState({
            artist: text
        })
    }

    handleSongCodeChange(text) {
        this.setState({
            songCode: text
        })
    }    

    handleImageURLChange(text) {
        this.setState({
            imageURL: text
        }) 
    }

    onPressAddToList() {
        const newSong = {
            title: this.state.title,
            artist: this.state.artist,
            genre: '',
            image: this.state.imageURL,
            song_code: this.state.songCode,
            music_brainz_id: ''
        }
        // console.log(newSong)
        // this.props.setModalVisible(false)
        this.props.addSong(newSong)
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
                    <TextInput 
                        onChangeText={ this.handleTitleChange }
                        placeholder='title'
                    />
                    <TextInput 
                        onChangeText={ this.handleArtistChange }
                        placeholder='artist'
                    />
                    <TextInput 
                        onChangeText={ this.handleSongCodeChange }
                        placeholder='song code'
                    />
                    <TextInput 
                        onChangeText={ this.handleImageURLChange }
                        placeholder='image URL'
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
        alignItems:"stretch",
        width:'100%'
    }
})

export default NewSongForm