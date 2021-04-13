import React from 'react'
import { View, StyleSheet, StatusBar, Alert, TextInput, Text, Pressable } from 'react-native'
import { Overlay, Input, Card, Button, Icon } from 'react-native-elements'
import { Modal } from 'react-native-web'

class NewSongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            genre: '',
            songCode: '',
            imageURL: '',
            musicBrainzID: ''
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
            genre: this.state.genre,
            image: this.state.imageURL,
            song_code: this.state.songCode,
            music_brainz_id: this.state.musicBrainzID
        }
        // console.log(newSong)
        // this.props.setModalVisible(false)
        this.props.addSong(newSong)
    }

    render () {
        return (
            <View>
                <View style={styles.formHeader}>
                    {/* Heading for "Add New Song" form */}
                    <Text style={ styles.formHeading }>Add New Song</Text>
                    {/* Close Modal without submitting data Button */}
                    <Icon
                        name='times-circle'
                        type='font-awesome'
                        color='#FF0000'
                        onPress={() => this.props.setModalVisible(false)}
                        style= { styles.closeIcon }
                    />
                </View>
                
                {/* Song Title Field */}
                <View style={ styles.inputContainer } >
                    <Text>Song Title</Text>
                    <TextInput 
                        onChangeText={ this.handleTitleChange }
                        placeholder='e.g. Rock Lobster'
                        style={ styles.input }
                    />
                </View>
                
                {/* artist form field */}
                <View style={ styles.inputContainer } >
                    <Text>Artist</Text>
                    <TextInput 
                        onChangeText={ this.handleArtistChange }
                        placeholder='e.g. B-52s'
                        style={ styles.input }
                    />
                </View>

                {/* song code form field */}
                <View style={ styles.inputContainer } >
                    <Text>Song Code</Text>
                    <TextInput 
                        onChangeText={ this.handleSongCodeChange }
                        placeholder='input code for karaoke machine'
                        style={ styles.input }
                    />
                </View>

                {/* image URL form field */}
                <View style={ styles.inputContainer } >
                    <Text>Cover Art URL</Text>
                    <TextInput 
                        onChangeText={ this.handleImageURLChange }
                        placeholder='URL for cover art, include http:// or https://'
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
                        this.onPressAddToList()
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
    }
})

export default NewSongForm