import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Tile, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Swiper from 'react-native-swiper';


export default class Feature extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render(){
        const recipe = [
            {
              name: 'Pasta Carbonara',
              image: require('../assets/images/recipe-1.jpg'),
            },
            {
              name: 'Hearty pasta soup',
              image: require('../assets/images/recipe-2.jpg'),
            },
            {
              name: 'Bacon & mushroom',
              image: require('../assets/images/recipe-3.jpg'),
            },
            {
              name: 'Chunky sausage & ',
              image: require('../assets/images/recipe-4.jpg'),
            },
            {
                name: 'Pasta Carbonara',
                image: require('../assets/images/recipe-1.jpg'),
              },
              {
                name: 'Hearty pasta soup',
                image: require('../assets/images/recipe-2.jpg'),
              },
              {
                name: 'Bacon & mushroom pasta',
                image: require('../assets/images/recipe-3.jpg'),
              },
              {
                name: 'Chunky sausage & tomato pasta',
                image: require('../assets/images/recipe-4.jpg'),
              },
          ]
        return (
            <ImageBackground source={require('../assets/images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                <LinearGradient
                    colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.9)']}
                    style={{ flex: 1, padding: 15, alignItems: 'center', backgroundColor: 'transparent' }}
                    >
                    <View style={{flex: 0.05, justifyContent: 'flex-end', alignContent: 'center', paddingBottom: 20}}>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{height: 80, flex: 0.1, justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#24292e', marginBottom: 5}}>Selected for you</Text>
                            <Text style={{fontFamily: 'montserrat-regular', fontWeight: '600', fontSize: 12, color: '#64696e'}}>The recipe you've had on repeat this month</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {/* <Image source={require('../assets/images/recipe-1.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-2.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-3.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-4.jpg')} style={{width:150, height:150, margin:13}}/> */}
                                {recipe.map((u, i) => {
                                    return (
                                        <Card
                                            key={i}
                                            image={u.image}
                                            resizeMode="contain"
                                            imageStyle={{width:145,}}
                                            containerStyle={{alignItems:'center', borderRadius: 10}}>
                                            <Text style={{marginBottom: 10}}>
                                                {u.name}</Text>
                                        </Card>
                                    )}
                                )}
                            </ScrollView>
                        </View>
                        <View style={{height: 80, flex: 0.1, justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#24292e', marginBottom: 5}}>Top picks for you</Text>
                            <Text style={{fontFamily: 'montserrat-regular', fontWeight: '600', fontSize: 12, color: '#64696e'}}>The recipe you've had on repeat this month</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {/* <Image source={require('../assets/images/recipe-1.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-2.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-3.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-4.jpg')} style={{width:150, height:150, margin:13}}/> */}
                                {recipe.map((u, i) => {
                                    return (
                                        <Card
                                            key={i}
                                            image={u.image}
                                            resizeMode="contain"
                                            imageStyle={{width:145,}}
                                            containerStyle={{alignItems:'center', borderRadius: 10}}>
                                            <Text style={{marginBottom: 10}}>
                                                {u.name}</Text>
                                        </Card>
                                    )}
                                )}
                            </ScrollView>
                        </View>
                        <View style={{height: 80, flex: 0.1, justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#24292e', marginBottom: 5}}>Recently Played</Text>
                            <Text style={{fontFamily: 'montserrat-regular', fontWeight: '600', fontSize: 12, color: '#64696e'}}>The recipe you've had on repeat this month</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {/* <Image source={require('../assets/images/recipe-1.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-2.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-3.jpg')} style={{width:150, height:150, margin:13}}/>
                                <Image source={require('../assets/images/recipe-4.jpg')} style={{width:150, height:150, margin:13}}/> */}
                                {recipe.map((u, i) => {
                                    return (
                                        <Card
                                            key={i}
                                            image={u.image}
                                            resizeMode="contain"
                                            imageStyle={{width:145,}}
                                            containerStyle={{alignItems:'center', borderRadius: 10}}>
                                            <Text style={{marginBottom: 10}}>
                                                {u.name}</Text>
                                        </Card>
                                    )}
                                )}
                            </ScrollView>
                        </View>
                        <View style={{height: 80, flex: 0.1, justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#24292e', marginBottom: 5}}>Jump back in</Text>
                            <Text style={{fontFamily: 'montserrat-regular', fontWeight: '600', fontSize: 12, color: '#64696e'}}>The recipe you've had on repeat this month</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {recipe.map((u, i) => {
                                    return (
                                        <Card
                                            key={i}
                                            image={u.image}
                                            resizeMode="contain"
                                            imageStyle={{width:145,}}
                                            containerStyle={{alignItems:'center', borderRadius: 10}}>
                                            <Text style={{marginBottom: 10}}>
                                                {u.name}</Text>
                                        </Card>
                                    )}
                                )}
                            </ScrollView>
                        </View>
                        
                        
                    {/* <Swiper 
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
                            <View style={styles.slide2}>
                                <Text style={styles.text}>Beautiful</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                        </Swiper> */}
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
