import React from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import UserProfile from './UserProfile'
import UsersList from './UsersList'

class UsersListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            profile: {},
            showUsersList: true,
            showProfile: false
        }
        this.getUsers = this.getUsers.bind(this)
        this.getUser = this.getUser.bind(this)
        this.viewUserProfile = this.viewUserProfile.bind(this)
    }

    componentDidMount() {
        this.getUsers()
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
        const apiURL = this.props.baseURL + this.props.apiProfileRoute + '/' + profileID
        console.log(apiURL)
        fetch(apiURL, {
            method: 'GET'
        })
        .then(data => data.json())
        .then(parsedData => {
            console.log(`parsedData ${parsedData.data}`)
            this.setState({
                profile: parsedData.data,
                showUsersList: false,
                showProfile: true
            })
            console.log(parsedData.data.id)
        })
        .catch( () => {
            console.log(err)
            Alert.alert('getUser error')
        })
    }

    viewUserProfile(profileID) {
        // this.setState({
        //     showUsersList: false,
        //     showProfile: true
        // })
        this.getUser(profileID)
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
        backgroundColor: 'blue',
        flex: 1,
        width: '100%',
        alignItems: 'center',
    }
})