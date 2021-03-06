import React from 'react'
import { StyleSheet, View, Text, Modal } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import UserProfile from './UserProfile'
import { FAB } from 'react-native-paper'
import UpdateProfileForm from './UpdateProfileForm'

class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: this.props.profile,
            modalUpdateProfileVisible: false,
        }
        this.setModalVisible = this.setModalVisible.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
    }

    setModalVisible(visible) {
        console.log('setModalVisible')
        this.setState({
            modalUpdateProfileVisible: visible
        })
    }

    updateProfile(updatedProfile, profileID) {
        console.log('updateProfile')
        const apiURL = this.props.baseURL + this.props.apiProfileRoute + '/' + profileID
        fetch(apiURL, {
            method: 'PUT',
            body: JSON.stringify(updatedProfile),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (res => res.json())
        .then (resJson => {
            console.log('updated song')
            console.log(resJson)
            this.setState({
                profile: resJson.data
            })
            this.props.updateCurrentUser(resJson.data)
            this.setModalVisible(false)
        })
        .catch (error => console.error({'Error': error}))
    }

    render() {
        return (
            <View style={ styles.container }>

                {/* render section header */}
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionHeader}>Member Profile</Text>
                </View>
                <UserProfile 
                    baseURL = { this.props.baseURL }
                    apiSongsRoute = { this.props.apiSongsRoute }
                    profile = { this.state.profile }
                />
                <Button 
                    title = '  Edit Profile'
                    buttonStyle = { styles.button }
                    containerStyle = { styles.buttonContainer }
                    icon = {
                        <Icon
                            name = 'edit'
                            type = "font-awesome"
                            color = 'white'
                        />
                        
                    }
                    onPress = { () => {
                        this.setModalVisible(true)
                        console.log("update user profile")
                    } }
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={ this.state.modalUpdateProfileVisible }
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.")
                        this.setModalVisible(!this.state.modalUpdateProfileVisible)
                    }}
                >
                    <View style={styles.modalView}>
                        <UpdateProfileForm 
                            profile = { this.props.profile }
                            setModalVisible = { this.setModalVisible }
                            updateProfile = { this.updateProfile }
                        />
                    </View>
                </Modal>
            </View>
            
        )
    }
}

export default UserProfileContainer

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'green',
        flex: 1,
        width: '100%',
        // alignItems: 'center',
        justifyContent: 'flex-start',
    },
    sectionHeaderContainer: {
        height: 30,
        // marginTop: 15,
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: '#DCDCDC'
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'green',
        // margin: 10,
        padding: 10,
    },
    buttonContainer: {
        // backgroundColor: 'yellow',
        // margin: 10,
        // width: 200,
        alignItems: 'center'
    },
    modalView: {
        // backgroundColor: 'yellow',
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
})