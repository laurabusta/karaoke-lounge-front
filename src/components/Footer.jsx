import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
        }
        this.onPressButtonGroup = this.onPressButtonGroup.bind(this)
    }

    onPressButtonGroup(selectedIndex) {
        switch(selectedIndex) {
            case 0:
                console.log('activity log view pressed')
                break
            case 1:
                console.log('song list view pressed')
                break
            case 2:
                console.log('users view pressed')
                break
            case 3:
                console.log('profile view pressed')
                break
            default:
                console.log('selected Index does not exist')
        }
        this.setState({
            selectedIndex: selectedIndex
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ButtonGroup
                    onPress = { this.onPressButtonGroup }
                    selectedIndex = { this.state.selectedIndex }
                    buttons = {['logs', 'songs', 'users', 'profile']}
                />
            </View>
        )
    }
}

export default Footer

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50
    },
})