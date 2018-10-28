import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableHighlight } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Background from './Background';


export default class Login extends React.Component{
    static navigationOptions={
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
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
            // <SafeAreaView style={styles.container}>
            <Background>
             {/* <View style={styles.container}> */}

                <View style={styles.logoContainer}>
                    {/* <Image source={require('../assets/images/logo.png')} /> */}
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 70, color: '#283655'}}>ZIPBOB</Text>
                </View>
                <View style={styles.socialButtonContainer}>
                     <SocialIcon
                        style={[styles.socialButton, {backgroundColor: '#fe8a71'}]}
                        title='Sign Up With Email'
                        button
                        type='envelope'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        title='Sign Up With Google'
                        button
                        type='google-plus-official'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        title='Sign Up With Facebook'
                        button
                        type='facebook'
                        onPress={()=>this.onFacebookPress()}
                        />
                </View>
                <TouchableHighlight 
                    underlayColor={'transparent'}
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    onPress={()=>{this.props.navigation.goBack()}}>
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 14, color: '#fff'}}>Go Back</Text>
                </TouchableHighlight>
                
            {/* </SafeAreaView> */}
                
            </Background>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialButton: {
        width: 300,
        margin: 8,
    },
    socialButtonContainer: {
        flex: 1,
    },
    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    }
})