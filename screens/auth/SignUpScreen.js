import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableHighlight } from 'react-native';
import { SocialIcon } from 'react-native-elements';


export default class Login extends React.Component{
    static navigationOptions={
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            facebook: true,
            instagram: true,
            google: true,
        }
        this.onFacebookPress = this.onFacebookPress.bind(this);
    }

    onFacebookPress(){
        this.setState({
            facebook: false,
        })
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logoContainer}>
                    {/* <Image source={require('../assets/images/logo.png')} /> */}
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 70, color: '#283655'}}>ZIPBOB</Text>
                </View>
                <View style={styles.socialButtonContainer}>
                     <SocialIcon
                        style={[styles.socialButton, {backgroundColor: '#fe8a71'}]}
                        title='Sign Up With Email'
                        button
                        raised={this.state.google}
                        type='envelope'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        title='Sign Up With Github'
                        button
                        raised={this.state.google}
                        type='github'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        title='Sign Up With LinkedIn'
                        button
                        raised={this.state.google}
                        type='linkedin'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        title='Sign Up With Facebook'
                        button
                        raised={this.state.facebook}
                        type='facebook'
                        onPress={()=>this.onFacebookPress()}
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        title='Sign Up With Instagram'
                        button
                        raised={this.state.instagram}
                        light
                        type='instagram'
                        />
                </View>
                <TouchableHighlight 
                    underlayColor={'transparent'}
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    onPress={()=>{this.props.navigation.goBack()}}>
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 14, color: '#283655'}}>Go Back</Text>
                </TouchableHighlight>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialButton: {
        width: 300,
        margin: 8,
    },
    socialButtonContainer: {
        flex: 2,
    },
    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
})