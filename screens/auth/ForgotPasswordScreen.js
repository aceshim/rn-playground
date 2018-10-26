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
    ActivityIndicator,
} from 'react-native';
import { SocialIcon, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import Modal from 'react-native-modal'


export default class Login extends React.Component{
    static navigationOptions={
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
        }
    }

    _showModal = () => this.setState({ isModalVisible: true })
    
    _hideModal = () => this.setState({ isModalVisible: false })

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
                        title='Forgot My Password'
                        button
                        raised={this.state.google}
                        type='reddit-alien'
                        onPress={ this._showModal }
                        />
                <TouchableHighlight 
                    underlayColor={'transparent'}
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    onPress={()=>{this.props.navigation.goBack()}}>
                    <Text style={{fontFamily: 'montserrat-bold', fontSize: 14, color: '#283655'}}>Go Back</Text>
                </TouchableHighlight>
                <Modal isVisible={this.state.isModalVisible} style={styles.modalContainer}>
                    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                        <Button
                            raised
                            borderRadius={30}
                            backgroundColor={'#88d8b0'}
                            containerViewStyle={{borderRadius: 30, width: 250}}
                            leftIcon={{name: 'check', fontSize: 20}}
                            title='Okay, Got it.' 
                            onPress={ this._hideModal }/>
                    </View>
                </Modal>
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
    },
    modalContainer: {
        flex: 0.3,
        top: 500,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})