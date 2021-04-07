import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

class Header extends React.Component {
    render () {
        return (
            <View style={ styles.headerContainer }>
                <Image source={ require('../../src/img/karaoke-lounge-banner.png') }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        // backgroundColor: 'green',
        height: 60,
        width: "100%"
    }
})

export default Header