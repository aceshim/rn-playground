import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableHighlight } from 'react-native';
import { SocialIcon, Divider } from 'react-native-elements';


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
        this.props.navigation.navigate('LoginEmail');
    }

    onSignUpPress(){
        this.props.navigation.navigate('SignUp');
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logoContainer}>
                    {/* <Image source={require('../assets/images/logo.png')} /> */}
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 70, color: '#283655'}}>ZIPBOB</Text>
                </View>
                <View style={styles.socialText}>
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#283655'}}>Sign In With</Text>
                </View>
                <View style={styles.socialButtonContainer}>
                     <SocialIcon
                        style={[styles.socialButton, {backgroundColor: '#fe8a71'}]}
                        button
                        raised={this.state.google}
                        type='envelope'
                        onPress={ () => { this.props.navigation.navigate('SignInEmail'); } }
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        button
                        raised={this.state.google}
                        type='github'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        button
                        raised={this.state.google}
                        type='linkedin'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        button
                        raised={this.state.facebook}
                        type='facebook'
                        onPress={()=>this.onFacebookPress()}
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        button
                        raised={this.state.instagram}
                        light
                        type='instagram'
                        />
                    
                </View>
                <View style={styles.bottomTextContainer}>
                    <TouchableHighlight 
                        underlayColor={'transparent'}
                        style={styles.bottomText}
                        onPress={()=>{this.props.navigation.navigate('SignUp');}}>
                        <Text style={{fontFamily: 'montserrat-regular', fontSize: 14, color: '#283655'}}>Sign up for an account</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        underlayColor={'transparent'}
                        style={styles.bottomText}
                        onPress={()=>{this.props.navigation.navigate('SignUp');}}>
                        <Text style={{fontFamily: 'montserrat-regular', fontSize: 14, color: '#283655'}}>Forgot password?</Text>
                    </TouchableHighlight>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    socialButton: {
        margin: 8,
        width: 52
    },
    logoContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    socialButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTextContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    bottomText: {
        margin: 10,
    }
})