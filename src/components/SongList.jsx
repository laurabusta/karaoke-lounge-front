import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableHighlight } from 'react-native'

class SongList extends React.Component {
    // renderItem(item) {
    //     <Item title={ item.title } />
    // }

    render () {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={ this.props.songs }
                    renderItem={ ( {item, index, separators} ) => (
                        <TouchableHighlight
                            key={item.id}>
                            <View style={styles.item}>
                                <Text>"{ item.title }" by { item.artist }</Text>
                                <Text>{ item.genre }</Text>
                            </View>
                        </TouchableHighlight>

                    )}
                />
            </SafeAreaView>
            // <div>
            //     <h3>Song List</h3>
            //     <table>
            //         <tbody>
            //             { this.props.songs.map(song => {
            //                 return (
            //                     <tr key={ song.id }>
            //                         <td>{ song.title }</td>
            //                         <td>{ song.artist }</td>
            //                         <td>{ song.genre }</td>
            //                         { console.log(song) }
            //                     </tr>                                
            //                 )                            
            //             })}
            //         </tbody>
            //     </table>
            // </div>
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