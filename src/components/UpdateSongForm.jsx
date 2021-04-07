import React from 'react'
import { View, Pressable, Text, TextInput, Image } from 'react-native'

class UpdateSongForm extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            title: this.props.song.title,
            artist: this.props.song.artist,
            genre: this.props.song.genre,
            songCode: this.props.song.song_code,
            imageURL: this.props.song.image,
            musicBrainzID: this.props.song.music_brainz_id
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

    render() {
        return (
            <View>
                <Pressable onPress={() => this.props.setUpdateModalVisible(false)}>
                    <Text>Press Me!</Text>
                </Pressable>
                <TextInput 
                    onChangeText={ this.handleTitleChange }
                    placeholder='title'
                    value={ this.state.title }
                />
                <TextInput 
                    onChangeText={ this.handleArtistChange }
                    placeholder='artist'
                    value={ this.state.artist }
                />
                <TextInput 
                    onChangeText={ this.handleSongCodeChange }
                    placeholder='song code'
                    value={ this.state.songCode }
                />
                <TextInput 
                    onChangeText={ this.handleImageURLChange }
                    placeholder='image URL'
                    value={ this.state.imageURL }
                />
                <Image 
                    source={{uri: this.props.song.image}} 
                    style={{width: 50, height: 50}} 
                />
            </View>
        )
    }
}

export default UpdateSongForm