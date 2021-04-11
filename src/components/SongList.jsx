import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableHighlight, Alert, ScrollView } from 'react-native'
import { Icon, Card, ListItem, Button, Image } from 'react-native-elements'

class SongList extends React.Component {

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionHeader}>Karaoke Playlist</Text>
                </View>
                <ScrollView>
                    { this.props.songs.map( song => {
                        if (song.image === '') {
                            song.image = 'https://i.imgur.com/dyGF5Uo.png'
                          }
                        return (
                            <ListItem key={song.id} bottomDivider>
                                <Image 
                                    source={{uri: song.image}} 
                                    style={{width: 50, height: 50}} 
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{ song.title }</ListItem.Title>
                                    <ListItem.Subtitle>{ song.artist }</ListItem.Subtitle>
                                    <ListItem.Subtitle>{ song.song_code }</ListItem.Subtitle>
                                </ListItem.Content>
                                <Icon 
                                    name='edit'
                                    type='font-awesome'
                                    onPress={ () => { this.props.handleUpdateSong(song) }}
                                />
                                <Icon 
                                    name='trash-o'
                                    type='font-awesome'
                                    onPress={ () => { this.props.deleteSong(song.id) }}
                                />
                            </ListItem>
                        )
                    })}
                </ScrollView>
                {/* <FlatList
                    data={ this.props.songs }
                    renderItem={ ({ item }) => (
                        <ListItem key={item.id} bottomDivider>
                            <Image 
                                source={{uri: item.image}} 
                                style={{width: 50, height: 50}} 
                            />
                            <ListItem.Content>
                                <ListItem.Title>{ item.title }</ListItem.Title>
                                <ListItem.Subtitle>{ item.artist }</ListItem.Subtitle>
                                <ListItem.Subtitle>{ item.song_code }</ListItem.Subtitle>
                            </ListItem.Content>
                            <Icon 
                                name='edit'
                                type='font-awesome'
                            />
                            <Icon 
                                name='trash-o'
                                type='font-awesome'
                            />
                        </ListItem> 
                    )}
                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    //   marginTop: StatusBar.currentHeight || 0,
    //   backgroundColor: 'red',
    },
    item: {
        width: '100%',
    },
    title: {
      fontSize: 32,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionHeaderContainer: {
        height: 30,
        // marginTop: 15,
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: '#DCDCDC'
    }
  });

export default SongList