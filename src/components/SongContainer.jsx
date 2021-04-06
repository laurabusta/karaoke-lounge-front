import React from 'react'
import { Text, View, StyleSheet, StatusBar, Pressable, Alert, Modal } from 'react-native'
import { Icon, Button } from 'react-native-elements'
// import { Modal } from 'react-native-web'
// import Modal from 'modal-react-native-web';
import SongList from './SongList'
import NewSongForm from './NewSongForm'

let baseURL = 'http://localhost:8000/api/v1/songs'

class SongContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            testCount: 0,
            newSongFormVisible: true,
            modalAddToListVisible: false,
            showSongList: true,
            showNewSongForm: false
        }
        this.setModalVisible = this.setModalVisible.bind(this)
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
                modalVisible: false
            })
        } catch (err) {
            console.log(err)
            Alert.alert('getSongs error')
        }

    }

    setModalVisible(visible) {
        console.log('setModalVisible activated')
        // Alert.alert("setModalVisible activated")
        this.setState({
            modalAddToListVisible: visible
        })
    }

    onPressAddToList() {
        this.setModalVisible(false)
        // this.setState({
        //     showNewSongForm: true,
        //     showSongList: false
        // })
    }


    render () {
        return (
            <View style={styles.container}>
                {/* <Text>SongContainer Component is here!</Text>
                <Text>testCount = { this.state.testCount }</Text> */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={ this.state.modalAddToListVisible }
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!this.state.modalAddToListVisible);
                      }}
                >
                    <View style={styles.modalView}>
                        {/* <Text>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(false)}
                        >
                            <Text>Hide Modal</Text>
                        </Pressable> */}
                        <NewSongForm
                            setModalVisible= { this.setModalVisible }
                            // onPressAddToList = { this.onPressAddToList }
                        />
                    </View>
                </Modal>
                {/* <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable> */}
                {
                    this.state.showSongList &&
                    <SongList
                        songs = { this.state.songs }
                        onPressAddToList = { this.onPressAddToList }
                    />
                }
                {
                    this.state.showNewSongForm &&
                    <NewSongForm />
                }
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
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        alignItems:"stretch",
        width:'100%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
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