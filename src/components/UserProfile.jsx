import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Avatar, Divider, Button } from 'react-native-elements'

class UserProfile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.avatarContainer}>
                        <Avatar 
                        source={{ uri: this.props.profile.profile_pic_URL }}
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
        backgroundColor: 'yellow',
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