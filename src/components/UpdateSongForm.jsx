import React from 'react'
import { View, Pressable, Text, TextInput, StyleSheet } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'

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
                <View style={styles.formHeader}>
                    {/* Heading for "Edit Song" form */}
                    <Text style={ styles.formHeading }>Edit Song</Text>
                    {/* Close Modal without submitting data Button */}
                    <Icon
                        name='times-circle'
                        type='font-awesome'
                        color='#FF0000'
                        onPress={() => this.props.setUpdateModalVisible(false)}
                        style= { styles.closeIcon }
                    />
                </View>

                {/* Cover Art Image */}
                <View style={ styles.coverArtContainer }>
                    <Image 
                        source={ { uri: this.props.song.image } } 
                        style={ { width: 150, height: 150 } } 
                    />
                    <Text>Cover Art</Text>
                </View>

                {/* song title form field */}
                <View style={ styles.inputContainer }>
                    <Text>Song Title</Text>
                    <TextInput 
                        onChangeText={ this.handleTitleChange }
                        placeholder='title'
                        value={ this.state.title }
                        style={ styles.input }
                    />
                </View>

                {/* artist form field */}
                <View style={ styles.inputContainer }>
                    <Text>Artist</Text>
                    <TextInput 
                        onChangeText={ this.handleArtistChange }
                        placeholder='artist'
                        value={ this.state.artist }
                        style={ styles.input }
                    />
                </View>

                {/* song code form field */}
                <View style={ styles.inputContainer }>
                    <Text>Song Code</Text>
                    <TextInput 
                        onChangeText={ this.handleSongCodeChange }
                        placeholder='song code'
                        value={ this.state.songCode }
                        style={ styles.input }
                    />
                </View>

                {/* image URL form field */}
                <View style={ styles.inputContainer }>
                    <Text>Cover Art URL</Text>
                    <TextInput 
                        onChangeText={ this.handleImageURLChange }
                        placeholder='image URL'
                        value={ this.state.imageURL }
                        style={ styles.input }
                    />
                </View>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        alignItems:"center",
        justifyContent: "center",
        width:'100%'
    },
    input: {
        height: 40,
        width: 300,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginBottom: 5,
    },
    inputContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    closeIcon: {
        alignItems: "flex-end",
        marginBottom: 5
    },
    formHeader: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    formHeading: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20
    },
    coverArtContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    }
})

export default UpdateSongForm