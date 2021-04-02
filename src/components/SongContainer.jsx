import React from 'react'
import { Text, View } from 'react-native'

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
        // this.setState({
        //     testCount: this.state.testCount + 1
        // })
        fetch(baseURL + '/')
            .then(data => {
                return data.json()
            }, err => console.log(err))
            .then(parsedData => {
                console.log(parsedData)
                this.setState({
                    songs: parsedData,
                    testCount: this.state.testCount + 1
                })
            }, err => console.log(err))
    }

    render () {
        return (
            <View>
                <Text>SongContainer Component is here!</Text>
                <Text>testCount = { this.state.testCount }</Text>
            </View>
        )
    }
}

export default SongContainer