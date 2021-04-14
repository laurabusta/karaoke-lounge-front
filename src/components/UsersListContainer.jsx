import React from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import UserProfile from './UserProfile'
import UsersList from './UsersList'

class UsersListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            profile: this.props.currentUser,
            showUsersList: true,
            showProfile: false
        }
        this.getUsers = this.getUsers.bind(this)
        this.getUser = this.getUser.bind(this)
        this.viewUserProfile = this.viewUserProfile.bind(this)
    }

    componentDidMount() {
        this.getUsers()
        // this.getUser(this.props.currentUser.id)
    }

    getUsers() {
        console.log('get all users from backend')
        fetch(this.props.baseURL + this.props.apiProfileRoute, {
            method: 'GET'
        })
        .then(data => {
            return data.json()
        }, err => console.log(err))
        .then(parsedData => {
            console.log(`parsedData ${parsedData.data}`)
            this.setState({
                users: parsedData.data
            })
        })
        .catch( () => {
            console.log(err)
            Alert.alert('getUsers error')
        })
    }

    getUser(profileID) {
        console.log('get one user from backend by id')
        console.log(profileID)
        const apiURL = this.props.baseURL + this.props.apiProfileRoute + '/' + profileID
        console.log(apiURL)
        fetch(apiURL, {
            method: 'GET'
        })
        .then(data => data.json(), err => console.log(err))
        // .then(parsedData => console.log(parsedData.data[0].id))
        .then(parsedData => {
            console.log(parsedData.data[0])
            this.setState({
                profile: parsedData.data[0],
                // showUsersList: false,
                // showProfile: true
            })
        })
        .catch( () => {
            console.log(err)
            Alert.alert('getUser error')
        })
    }

    viewUserProfile(user) {
        this.setState({
            showUsersList: false,
            showProfile: true
        })
        console.log(user)
        console.log(user.id)
        this.getUser(user.id)
    }

    render() {
        return (
            <View style={ styles.container }>

                {/* render list of all users */}
                {
                    this.state.showUsersList &&
                    <UsersList
                        users = { this.state.users }
                        getUser = { this.getUser }
                        viewUserProfile = { this.viewUserProfile }
                    />
                }
                {
                    this.state.showProfile &&
                    <UserProfile
                        baseURL = { this.props.baseURL }
                        apiSongsRoute = { this.props.apiSongsRoute }
                        profile = { this.state.profile }
                    />
                }
            </View>
        )
    }
}

export default UsersListContainer

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        flex: 1,
        width: '100%',
        alignItems: 'center',
    }
})