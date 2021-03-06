import React from 'react'
import { Text, View, StyleSheet, StatusBar, Pressable, Alert, Modal } from 'react-native'
import { Icon, Button, Divider } from 'react-native-elements'
import { ActionButton } from 'react-native-action-button'
import { FAB } from 'react-native-paper'
import SongList from './SongList'
import NewSongForm from './NewSongForm'
import UpdateSongForm from './UpdateSongForm'

let baseURL = 'http://localhost:8000/api/v1/songs'

class SongContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            testCount: 0,
            newSongFormVisible: true,
            modalAddToListVisible: false,
            modalUpdateSongVisible: false,
            showSongList: true,
            showNewSongForm: false,
            songToUpdate: {}
        }
        this.setModalVisible = this.setModalVisible.bind(this)
        this.setUpdateModalVisible = this.setUpdateModalVisible.bind(this)
        this.getSongs = this.getSongs.bind(this)
        this.addSong = this.addSong.bind(this)
        this.deleteSong = this.deleteSong.bind(this)
        this.updateSong = this.updateSong.bind(this)
        this.handleUpdateSong = this.handleUpdateSong.bind(this)
        this.addSongIcon = this.addSongIcon.bind(this)
    }

    componentDidMount () {
        this.getSongs()
    }

    async getSongs() {
        // fetch(baseURL + '/', {
        //     method: 'GET',
        // })
        //     .then(data => {
        //         return data.json()
        //     }, err => console.log(err))
        //     .then(parsedData => {
        //         console.log(`parsedData ${parsedData.data}`)
        //         this.setState({
        //             songs: parsedData.data,
        //             testCount: this.state.testCount + 1,
        //             modalVisible: false
        //         })
        //     }, err => console.log(err))
        //     .then( () => {
        //         console.log(this.state.songs)
        //     })
        //     .catch( () => {
        //         console.log('getSongs error')
        //         Alert.alert('getSongs error')
        //     })
        try {
            const response = await fetch(baseURL + '/', {
                method: 'GET'
            })
            const json = await response.json()
            this.setState({
                songs: json.data,
                testCount: this.state.testCount + 1,
                // modalVisible: false
            })
        } catch (err) {
            console.log(err)
            Alert.alert('getSongs error')
        }

    }

    addSong(song) {
        console.log(song)
        // add an if statement that checks if the image is null, then uses a URL to a default "no image" jpg.
        if (song.song_code === '') {
            song.song_code = '------'
        }
        fetch(baseURL + '/', {
            method: 'POST',
            body: JSON.stringify(song),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (res => res.json())
        .then (resJson => {
            console.log('added song')
            console.log(resJson)
            this.getSongs()
            this.setModalVisible(false)
        })
        .catch (error => console.error({'Error': error}))
    }

    deleteSong(songIndex) {
        fetch(baseURL + '/' + songIndex, {
            method: 'DELETE'
        })
        .then (res => res.json())
        .then (resJson => {
            this.getSongs()
        })
    }

    updateSong(song, songID) {
        console.log(song)
        // this.setUpdateModalVisible(false)
        fetch(baseURL + '/' + songID, {
            method: 'PUT',
            body: JSON.stringify(song),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (res => res.json())
        .then (resJson => {
            console.log('updated song')
            console.log(resJson)
            this.getSongs()
            this.setUpdateModalVisible(false)
        })
        .catch (error => console.error({'Error': error}))
    }

    setModalVisible(visible) {
        console.log('setModalVisible activated')
        // Alert.alert("setModalVisible activated")
        this.setState({
            modalAddToListVisible: visible
        })
    }

    setUpdateModalVisible(visible) {
        console.log('setUpdateModalVisible activated')
        this.setState({
            modalUpdateSongVisible: visible
        })
    }

    handleUpdateSong(song) {
        this.setUpdateModalVisible(true)
        this.setState({
            songToUpdate: song
        })
    }

    addSongIcon() {
        return (
            <Icon 
                name='add-to-list'
                type='entypo'
                color='white'
            />
        )
    }

    render () {
        return (
            <View style={styles.container}>
                
                {/* Add Song Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={ this.state.modalAddToListVisible }
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!this.state.modalAddToListVisible);
                      }}
                >
                    <View style={styles.modalView}>
                        <NewSongForm
                            setModalVisible= { this.setModalVisible }
                            addSong = { this.addSong }
                        />
                    </View>
                </Modal>

                {/* Update Song Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={ this.state.modalUpdateSongVisible }
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.")
                        this.setUpdateModalVisible(!this.state.modalUpdateSongVisible)
                    }}
                >
                    <View style={styles.modalView}>
                        {/* update song form */}
                        <UpdateSongForm
                            song = { this.state.songToUpdate }
                            setUpdateModalVisible = { this.setUpdateModalVisible}
                            updateSong = { this.updateSong }
                        />
                    </View>
                </Modal>

                {/* Song List */}
                {
                    this.state.showSongList &&
                    <SongList
                        songs = { this.state.songs }
                        deleteSong = { this.deleteSong }
                        handleUpdateSong = { this.handleUpdateSong }
                    />
                }
                  
                {/* Add to List Button */}
                {/* <View style={ styles.addButtonContainer }>
                    <Button
                        icon={
                            <Icon 
                                name='add-to-list'
                                type='entypo'
                                color='white'
                            />
                        }
                        title="  Add to List"
                        onPress={ () => {  
                            // Alert.alert("Add to List?") 
                            this.setModalVisible(true)
                            console.log("Add to List?")
                            }
                        }
                    />
                </View> */}

                {/* <ActionButton
                    buttonColor = 'rgb(52,199,89)'
                    renderIcon = { this.addSongIcon }
                    onPress={ () => {  
                        // Alert.alert("Add to List?") 
                        this.setModalVisible(true)
                        console.log("Add to List?")
                        }
                    }
                >
                </ActionButton> */}
                <FAB
                    style={styles.fab}
                    large
                    icon="plus"
                    onPress={() => {
                        this.setModalVisible(true)
                        console.log("Add to List?")
                    }}
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
        justifyContent: "flex-start",
        width:'100%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
    modalView: {
        margin: 30,
        marginTop: 90,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    addButtonContainer: {
        alignItems: "stretch",
        width: "100%"
    },
    iconButtonContainer: {
        backgroundColor: 'red',
        zIndex: 5,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default SongContainer