import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ButtonGroup, Icon } from 'react-native-elements'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
        }
        this.onPressButtonGroup = this.onPressButtonGroup.bind(this)
        this.iconMusic = this.iconMusic.bind(this)
        this.iconBook = this.iconBook.bind(this)
        this.iconUsers = this.iconUsers.bind(this)
        this.iconUser = this.iconUser.bind(this)
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

    iconBook() {
        return (
            <Icon
                name = 'book'
                type = 'font-awesome'
                color = '#DCDCDC'
            />
        )
    } 

    iconMusic() {
        return (
            <Icon
                name = 'music'
                type = 'font-awesome'
                color = '#DCDCDC'
            />
        )
    } 

    iconUsers() {
        return (
            <Icon
                name = 'users'
                type = 'font-awesome'
                color = '#DCDCDC'
            />
        )
    } 

    iconUser() {
        return (
            <Icon
                name = 'user'
                type = 'font-awesome'
                color = '#DCDCDC'
            />
        )
    } 
        
    render() {
        return (
            <View style={styles.container}>
                <ButtonGroup
                    onPress = { this.onPressButtonGroup }
                    selectedIndex = { this.state.selectedIndex }
                    buttons = {[
                        { element: this.iconBook },
                        { element: this.iconMusic }, 
                        { element: this.iconUsers },
                        { element: this.iconUser }
                    ]}
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