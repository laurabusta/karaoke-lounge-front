import React from 'react'
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { Modal } from 'react-native-web'
// import Modal from 'modal-react-native-web';
import SongList from './SongList'
import NewSongForm from './NewSongForm'

let baseURL = 'http://localhost:8000/api/v1/songs'

class SongContainer extends React.Component {
    state = {
        songs: [],
        testCount: 0,
        newSongFormVisible: true,
        modalVisible: false
    }

    componentDidMount () {
        this.getSongs()
    }

    getSongs() {
        fetch(baseURL + '/', {
            method: 'GET',
        })
            .then(data => {
                return data.json()
            }, err => console.log(err))
            .then(parsedData => {
                console.log(`parsedData ${parsedData.data}`)
                this.setState({
                    songs: parsedData.data,
                    testCount: this.state.testCount + 1,
                    modalVisible: false
                })
            }, err => console.log(err))
            .then( () => {
                console.log(this.state.songs)
            })
            .catch( () => {
                console.log('getSongs error')
                Alert.alert('getSongs error')
            })
    }

    setModalVisible(visible) {
        console.log('setModalVisible activated')
        Alert.alert("setModalVisible activated")
        this.setState({
            modalVisible: visible
        })
    }


    render () {
        return (
            <View style={styles.centeredView}>
                {/* <Text>SongContainer Component is here!</Text>
                <Text>testCount = { this.state.testCount }</Text> */}
                {/* <Modal
                    animationType="slide"
                    transparent={false}
                    visible={ this.state.modalVisible }
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                >
                    <View style={styles.modalView}>
                        <Text>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(false)}
                        >
                            <Text>Hide Modal</Text>
                        </Pressable>
                    </View>
                </Modal> */}
                <SongList
                    songs = { this.state.songs }
                />
                <Button
                    icon={
                        <Icon 
                            name='add-to-list'
                            type='entypo'
                            color='white'
                        />
                    }
                    title="  Add to List"
                />
                {/* {
                    this.state.newSongFormVisible &&
                    <View style={styles.modalView}>
                        <Text>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(false)}
                        >
                            <Text>Hide Modal</Text>
                        </Pressable>
                    </View>
                } */}
                {/* <Overlay
                    isVisible={ true }
                    ModalComponent={ Modal }
                >
                    <Text>Hello World</Text>
                </Overlay> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      }
})

export default SongContainer