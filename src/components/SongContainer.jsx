import React from 'react'
import { Text, View } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import SongList from './SongList'

let baseURL = 'http://localhost:8000/api/v1/songs'

class SongContainer extends React.Component {
    state = {
        songs: [],
        testCount: 0
    }

    componentDidMount () {
        this.getSongs()
    }

    getSongs() {
        fetch(baseURL + '/', {
            method: 'GET',
        })
            .then(data => {
                return data.json()
            }, err => console.log(err))
            .then(parsedData => {
                console.log(`parsedData ${parsedData.data}`)
                this.setState({
                    songs: parsedData.data,
                    testCount: this.state.testCount + 1
                })
            }, err => console.log(err))
            .then( () => {
                console.log(this.state.songs)
            })
    }

    render () {
        return (
            <View>
                {/* <Text>SongContainer Component is here!</Text>
                <Text>testCount = { this.state.testCount }</Text> */}
                <Button
                    icon={
                        <Icon 
                            name='add-to-list'
                            type='entypo'
                            color='white'
                        />
                    }
                    title="  Add to List"
                />
                <SongList
                    songs = { this.state.songs }
                />
            </View>
        )
    }
}

export default SongContainer