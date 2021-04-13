import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Icon, Avatar, Button } from 'react-native-elements'

class UpdateProfileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.profile.username,
            email: this.props.profile.email,
            nickname: this.props.profile.nickname,
            fave_drink: this.props.profile.fave_drink,
            fave_genre: this.props.profile.fave_genre,
            profile_pic_URL: this.props.profile.profile_pic_URL,
        }
        this.onPressEditProfile = this.onPressEditProfile.bind(this)
    }

    onPressEditProfile() {
        console.log('onPressEditProfile')
    }

    render() {
        // set default image if URL is ""
        let profilePicURL = this.props.profile.profile_pic_URL
        if (profilePicURL === '') {
            profilePicURL = 'https://i.imgur.com/9cUTi1k.png'
        }
        return (
            <View>
                <View style={styles.formHeaderContainer}>
                    {/* Profile Pic Image */}
                    <View style={styles.profilePicContainer}>
                        <Avatar
                            source={{ uri: profilePicURL }}
                            rounded
                            size='medium'
                        />
                    </View>
                    {/* Heading for "Edit Song" form */}
                    <Text style={ styles.formHeading }>Edit Profile</Text>
                    {/* Close Modal without submitting data Button */}
                    <Icon
                        name='times-circle'
                        type='font-awesome'
                        color='#FF0000'
                        onPress={() => this.props.setModalVisible(false)}
                        style= { styles.closeIcon }
                    />
                </View>

                {/* Username/FullName Field */}
                <View style={ styles.inputContainer } >
                    <Text>Username</Text>
                    <TextInput 
                        onChangeText={ (text) => this.setState({username: text}) }
                        placeholder='full name'
                        value={ this.state.username }
                        style={ styles.input }
                    />
                </View>

                {/* email field */}
                <View style={ styles.inputContainer } >
                    <Text>Email Address</Text>
                    <TextInput 
                        onChangeText={ (text) => this.setState({email: text}) }
                        placeholder='email'
                        value={ this.state.email }
                        style={ styles.input }
                    />
                </View>

                {/* nickname field */}
                <View style={ styles.inputContainer } >
                    <Text>Nickname</Text>
                    <TextInput 
                        onChangeText={ (text) => this.setState({nickname: text}) }
                        placeholder='nickname'
                        value={ this.state.nickname }
                        style={ styles.input }
                    />
                </View>

                {/* favorite drink field */}
                <View style={ styles.inputContainer } >
                    <Text>Favorite Drink/Cocktail</Text>
                    <TextInput 
                        onChangeText={ (text) => this.setState({fave_drink: text}) }
                        placeholder='favorite drink'
                        value={ this.state.fave_drink }
                        style={ styles.input }
                    />
                </View>

                {/* favorite music genre field */}
                <View style={ styles.inputContainer } >
                    <Text>Favorite Music Genre</Text>
                    <TextInput 
                        onChangeText={ (text) => this.setState({fave_genre: text}) }
                        placeholder='favorite genre'
                        value={ this.state.fave_genre }
                        style={ styles.input }
                    />
                </View>

                {/* profile pic URL field */}
                <View style={ styles.inputContainer } >
                    <Text>Profile Pic URL</Text>
                    <TextInput 
                        onChangeText={ (text) => this.setState({profile_pic_URL: text}) }
                        placeholder='profile pic URL'
                        value={ this.state.profile_pic_URL }
                        style={ styles.input }
                    />
                </View>

                <Button
                    type='clear'
                    icon={
                        <Icon 
                            name='check'
                            type='font-awesome'
                            color='#007AFF'
                        />
                    }
                    title="  Submit"
                    onPress={ () => {  
                        // Alert.alert("Add to List?") 
                        // console.log("Add to List?")
                        this.onPressEditProfile()
                        }
                    }
                />
            </View>
        )
    }
}

export default UpdateProfileForm

const styles=StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formHeaderContainer: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: 'yellow',
    },
    formHeading: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20
    },
    profilePicContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    input: {
        height: 40,
        width: 300,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginBottom: 5,
    },
    inputContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
})