import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { ListItem, Avatar, Icon } from 'react-native-elements'

class UsersList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* render section header */}
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionHeader}>Karaoke VIPs</Text>
                </View>

                {/* render list of users */}
                <ScrollView>
                    { this.props.users.map( user => {
                        // check if there is a profile pic to render
                        if (user.profile_pic_URL === "") {
                            user.profile_pic_URL = 'https://i.imgur.com/9cUTi1k.png'
                          }
                        return (
                            <ListItem key={user.id} bottomDivider>
                                <Avatar 
                                    source={{
                                        uri: user.profile_pic_URL
                                    }}
                                    rounded
                                    size="medium"
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{ user.username }</ListItem.Title>
                                    <ListItem.Subtitle>"{ user.nickname }"</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        flex: 1,
        width: '100%',
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

export default UsersList