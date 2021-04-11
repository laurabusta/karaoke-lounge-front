import React from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import UsersList from './UsersList'

class UsersListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            showUsersList: true
        }
        this.getUsers = this.getUsers.bind(this)
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

    render() {
        return (
            <View style={ styles.container }>

                {/* render list of all users */}
                {
                    this.state.showUsersList &&
                    <UsersList
                        users = { this.state.users }
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