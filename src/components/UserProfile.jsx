import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Avatar, Divider, Button } from 'react-native-elements'
import SongList from './SongList'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            profile: this.props.profile 
        }
        this.getSongsByUser = this.getSongsByUser.bind(this)
    }

    componentDidMount() {
        this.getSongsByUser(this.props.profile.id)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        console.log(`this.props.profile ${this.props.profile.username}`)
        console.log(this.props.profile.id)
        console.log(`prevProps.profile ${prevProps.profile.username}`)
        if (prevProps.profile != this.props.profile) {
            this.getSongsByUser(this.props.profile.id)
            console.log('profile did update')
            // this.setState({
            //     profile: this.props.profile
            // })
        }

    }

    getSongsByUser(profileID) {
        const apiURL = this.props.baseURL + this.props.apiSongsRoute + '/user/' + profileID
        console.log(apiURL)
        fetch(apiURL, {
            method: 'GET'
        })
        .then(data => {
            return data.json()
        }, err => console.log(err))
        .then(parsedData => {
            console.log(`parsedData ${parsedData.data}`)
            this.setState({
                songs: parsedData.data
            })
        })
        .catch( () => {
            console.log(err)
            Alert.alert('getUsers error')
        })
    }

    render() {
        let profile_pic_URL = this.props.profile.profile_pic_URL
        if (profile_pic_URL === "") {
            profile_pic_URL = 'https://i.imgur.com/9cUTi1k.png'
        }
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.avatarContainer}>
                        <Avatar 
                            source={{ uri: profile_pic_URL }}
                            rounded
                            size={100}
                        />
                    </View>
                    <View style={styles.profileContentContainer}>
                        <Text h3>{ this.props.profile.username }</Text>
                        <Text h4>"{ this.props.profile.nickname }"</Text>
                        <Divider style={styles.divider} />
                        <Text h5>go-to genre:  { this.props.profile.fave_genre }</Text>
                        <Text h5>drink order:  { this.props.profile.fave_drink }</Text>
                    </View>
                </View>
                <SongList 
                    songs = { this.state.songs }
                />
            </View>
        )
    }
}

export default UserProfile

const styles=StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
        width: '100%',
    },
    profileContainer: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        alignItems: 'center',
        // padding: 20,
        margin: 20
    },
    avatarContainer: {
        padding: 0,
        margin: 0,
    },
    button: {
        padding: 0,
        margin: 0,
    },
    profileContentContainer: {
        // backgroundColor: 'gray',
        height: '100%',
        width: '100%',
        // padding: 20,
        paddingHorizontal: 20,
        margin: 0,
    },
    divider: {
        marginVertical: 10,
    }
})