import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableHighlight, Image } from 'react-native'
import { Icon, Card, ListItem } from 'react-native-elements'

class SongList extends React.Component {
    // renderItem(item) {
    //     <Item title={ item.title } />
    // }

    render () {
        return (
            <SafeAreaView style={styles.container}>
                { this.props.songs.map( song => {
                    return (
                        <ListItem key={song.id} bottomDivider>
                            <Image 
                                source={{uri: song.image}} 
                                style={{width: 50, height: 50}} 
                            />
                            {/* <ListItem.Content>
                                <ListItem.Title>{song.title}</ListItem.Title>
                                <ListItem.SubTitle>{song.artist}</ListItem.SubTitle>
                            </ListItem.Content> */}
                            <ListItem.Content>
                                <ListItem.Title>{ song.title }</ListItem.Title>
                                <ListItem.Subtitle>{ song.artist }</ListItem.Subtitle>
                                <ListItem.Subtitle>{ song.song_code }</ListItem.Subtitle>
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
                    )
                })}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default SongList