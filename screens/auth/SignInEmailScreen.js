import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    Text, 
    View, 
    TouchableHighlight, 
    StatusBar,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Alert,
    Button,
    ActivityIndicator,
} from 'react-native';
import { SocialIcon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


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
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    {/* <Image source={require('../assets/images/logo.png')} /> */}
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 70, color: '#283655'}}>ZIPBOB</Text>
                </View>
                <View style={styles.formContainer}>
                    <View>
                        <FormLabel fontFamily={'montserrat-regular'}>Email</FormLabel>
                        <FormInput style={{fontFamily: 'montserrat-regular'}} onChangeText={(text)=>console.log(text)}/>
                        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
                    </View>
                    <View>
                        <FormLabel fontFamily={'montserrat-regular'}>Password</FormLabel>
                        <FormInput style={{fontFamily: 'montserrat-bold'}} onChangeText={(text)=>console.log(text)}/>
                        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
                    </View>
                </View>
                <SocialIcon
                        style={styles.submitContainer}
                        title='Sign In With Email'
                        button
                        raised={this.state.google}
                        type='envelope'
                        onPress={ () => { this.props.navigation.navigate('SignInEmail'); } }
                        />
                <TouchableHighlight 
                    underlayColor={'transparent'}
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    onPress={()=>{this.props.navigation.goBack()}}>
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 14, color: '#283655'}}>Go Back</Text>
                </TouchableHighlight>
            </KeyboardAvoidingView>
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
    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 2,
        width: 300,
    },
    submitContainer: {
        backgroundColor: '#fe8a71', 
        width: 300,
        margin: 8,
    },
    textContainer: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(125,125,125,0.2)',
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    buttonContainer:{
        // backgroundColor: '#2980b6',
        backgroundColor: '#74090e',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton:{
        backgroundColor:  '#2980b6',
        color: '#fff'
    }
})