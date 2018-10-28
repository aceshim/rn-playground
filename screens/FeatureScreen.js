import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Swiper from 'react-native-swiper';


export default class Feature extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render(){
        return (
            <ImageBackground source={require('../assets/images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                <LinearGradient
                    colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.9)']}
                    style={{ flex: 1, padding: 15, alignItems: 'center', backgroundColor: 'transparent' }}
                    start={[0, 0]} 
                    end={[0, 0.3]}>
                    <View style={{flex: 0.05, justifyContent: 'flex-end', alignContent: 'center', paddingBottom: 20}}>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex: 0.1, justifyContent: 'flex-end', alignContent: 'center', paddingBottom: 20}}>
                        <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#24292e'}}>Selected for you</Text>
                    </View>
                    <Swiper 
                        containerStyle={styles.wrapper} 
                        showsButtons={false}
                        loop={true}
                        autoplay={false}
                        >
                        <Tile
                        imageSrc={require('../assets/images/jibbob-1.jpg')}
                        >
                        </Tile>
                        <Tile
                        imageSrc={require('../assets/images/jibbob-2.jpg')}
                        >
                        </Tile>
                        <Tile
                        imageSrc={require('../assets/images/jibbob-3.jpg')}
                        >
                        </Tile>
                        {/* <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View> */}
                    </Swiper>
                    <View style={{flex: 0.1, justifyContent: 'flex-end', alignContent: 'center', paddingBottom: 20}}>
                        <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#24292e'}}>Selected for you</Text>
                    </View>
                    <Swiper 
                        containerStyle={styles.wrapper} 
                        showsButtons={false}
                        loop={true}
                        autoplay={false}
                        >
                        <Tile
                        imageSrc={require('../assets/images/jibbob-1.jpg')}
                        >
                        </Tile>
                        <Tile
                        imageSrc={require('../assets/images/jibbob-2.jpg')}
                        >
                        </Tile>
                        <Tile
                        imageSrc={require('../assets/images/jibbob-3.jpg')}
                        >
                        </Tile>
                        {/* <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View> */}
                    </Swiper>
                    <Swiper 
                        containerStyle={styles.wrapper} 
                        showsButtons={false}
                        loop={true}
                        autoplay={false}
                        >
                        <Tile
                        imageSrc={require('../assets/images/jibbob-1.jpg')}
                        >
                        </Tile>
                        <Tile
                        imageSrc={require('../assets/images/jibbob-2.jpg')}
                        >
                        </Tile>
                        <Tile
                        imageSrc={require('../assets/images/jibbob-3.jpg')}
                        >
                        </Tile>
                        {/* <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View> */}
                    </Swiper>
                    </ScrollView>
                </LinearGradient>
            </ImageBackground>
        )
    }
};

const styles = StyleSheet.create({
    wrapper: {
        height: 300,
    },
    slide1: {
        // flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
