import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import UserProfile from './UserProfile'
import SongList from './SongList'

class UserProfileContainer extends React.Component {

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
                    profile = { this.props.profile }
                />

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
})