import React from 'react';
import { Image, StyleSheet, SafeAreaView, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import { SocialIcon, Divider } from 'react-native-elements';
import { LinearGradient,  } from 'expo';

import Background from './Background'



export default class Login extends React.Component{
    static navigationOptions={
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            SignIn: true,
        }
    }

    onSignUpPress(){
        this.props.navigation.navigate('SignUp');
    }

    render(){
        const SignInStack = props => {
            return (
                <View>
                    <View style={styles.logoContainer}>
                        {/* <Image style={{width: 300, height: 100}} source={require('../../assets/images/frontLogo.png')} /> */}
                        <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 70, color: '#fff'}}>ZIPBOB</Text>
                    </View>
                    <View style={styles.socialText}>
                        <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#fff'}}>Sign In With</Text>
                    </View>
                    <View style={styles.signInSocialButtonContainer}>
                        <SocialIcon
                            style={[styles.signInSocialButton, {backgroundColor: '#fe8a71'}]}
                            button
                            type='envelope'
                            />
                        <SocialIcon
                            style={styles.signInSocialButton}
                            button
                            type='facebook'
                            />
                        <SocialIcon
                            style={styles.signInSocialButton}
                            button
                            type='google-plus-official'
                            />
                        
                    </View>
                    <View style={styles.bottomTextContainer}>
                        <TouchableHighlight 
                            underlayColor={'transparent'}
                            style={styles.bottomText}
                            onPress={()=>{
                                this.setState({SignIn: false})}
                                }>
                            <Text style={{fontFamily: 'montserrat-regular', fontSize: 14, color: '#fff'}}>Sign up for an account</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            underlayColor={'transparent'}
                            style={styles.bottomText}
                            onPress={()=>{this.props.navigation.navigate('Home');}}>
                            <Text style={{fontFamily: 'montserrat-regular', fontSize: 14, color: '#fff'}}>Continue as Guest</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }
        
        const SignUpStack = props => {
            return (
                <View>
                    <View style={styles.logoContainer}>
                        {/* <Image style={{width: 300, height: 100}} source={require('../../assets/images/frontLogo.png')} /> */}
                        <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 70, color: '#fff'}}>ZIPBOB</Text>
                    </View>
                    <View style={[styles.signUpSocialButtonContainer, {flexDirection: 'column'}]}>
                            <SocialIcon
                            style={[styles.signUpSocialButton, {backgroundColor: '#fe8a71'}]}
                            title='Sign Up With Email'
                            button
                            type='envelope'
                            />
                        <SocialIcon
                            style={styles.signUpSocialButton}
                            title='Sign Up With Google'
                            button
                            type='google-plus-official'
                            />
                        <SocialIcon
                            style={styles.signUpSocialButton}
                            title='Sign Up With Facebook'
                            button
                            type='facebook'
                            onPress={()=>this.onFacebookPress()}
                            />
                    </View>
                    <TouchableHighlight 
                        underlayColor={'transparent'}
                        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                        onPress={()=>{this.setState({SignIn: true})}}>
                        <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 14, color: '#fff'}}>Go Back</Text>
                    </TouchableHighlight>
                </View>
            )
        }

        return (
            // <SafeAreaView style={styles.container}>
                // <LinearGradient
                //     // colors={['#8a3ab9', '#4c68d7', '#fccc63', '#fccc63', '#e95950',]}
                //     colors={['#fff']}
                //     // start={[0.1, 0]} 
                //     // end={[0, 0.1]}
                //     style={{ flex: 1, padding: 15, alignItems: 'center', backgroundColor: 'white' }}>
                
                // <ImageBackground source={require('../../assets/images/background.jpg')} style={{width: '100%', height: '100%'}}>
                //     <LinearGradient
                //         colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                //         style={{ flex: 1, padding: 15, alignItems: 'center', backgroundColor: 'transparent' }}>
                <Background>
                    {this.state.SignIn?<SignInStack/>:<SignUpStack/>}
                    {/* </LinearGradient> */}
                {/* // </ImageBackground> */}

                </Background>
                

            // </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    socialText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    signInSocialButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInSocialButton: {
        margin: 8,
        width: 52
    },
    signUpsocialButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpsocialButton: {
        margin: 8,
        width: 52
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