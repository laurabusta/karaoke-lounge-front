import React from 'react'
import { View, Pressable, Text, TextInput, Image } from 'react-native'
import { Button, Icon } from 'react-native-elements'

class UpdateSongForm extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            title: this.props.song.title,
            artist: this.props.song.artist,
            genre: this.props.song.genre,
            songCode: this.props.song.song_code,
            imageURL: this.props.song.image,
            musicBrainzID: this.props.song.music_brainz_id,
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleArtistChange = this.handleArtistChange.bind(this)
        this.handleSongCodeChange = this.handleSongCodeChange.bind(this)
        this.handleImageURLChange = this.handleImageURLChange.bind(this)
        this.onPressUpdateSong = this.onPressUpdateSong.bind(this)
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

    onPressUpdateSong () {
        const updatedSong = {
            title: this.state.title,
            artist: this.state.artist,
            genre: this.state.genre,
            image: this.state.imageURL,
            song_code: this.state.songCode,
            music_brainz_id: this.state.musicBrainzID
        }
        this.props.updateSong(updatedSong, this.props.song.id)
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
                        this.onPressUpdateSong()
                        }
                    }
                />
            </View>
        )
    }
}

export default UpdateSongForm