import React from 'react';
import { View, Button, Text, Platform, TouchableHighlight, SafeAreaView, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { MonoText } from '../components/StyledText';
import Swiper from 'react-native-swiper';

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// }
const recipe = {
  0: {
    name: 'Pasta Carbonara',
    image: '../assets/images/recipe-1.jpg',
  },
  1: {
    name: 'Hearty pasta soup',
    image: '../assets/images/recipe-2.jpg',
  },
  2: {
    name: 'Bacon & mushroom pasta',
    image: '../assets/images/recipe-3.jpg',
  },
  3: {
    name: 'Chunky sausage & tomato pasta',
    image: '../assets/images/recipe-4.jpg',
  },
}

export default class Home extends React.Component {
  state = {
    visible: false
  }
  static navigationOptions = {
    header: null,
  };

  

  enableDirection(){
    this.props.navigation.setParams({ 
      header: null 
    })

    this.setState({visible: true})
  }

  disableDirection(){
    this.setState({visible: false})
    this.props.navigation.setParams({ 
      header: undefined
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
                outerContainerStyles={{backgroundColor: 'white'}}
                leftComponent={{ icon: 'arrow-back', color: 'black' }}
                centerComponent={{ text: 'Home', style: { color: 'black', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={{ icon: 'help', color: 'black' }}
                />
        <Swiper 
          containerStyle={styles.wrapper} 
          showsButtons={false}
          loop={true}
          autoplay={true}
          >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <View style={{flex:2  ,}}>

        </View>
        <SlidingUpPanel
          visible={this.state.visible}
          draggable={{bottom: 700}}
          onRequestClose={() => this.setState({visible: false})}>
          <SafeAreaView style={styles.slideViewContainer}>
            <View style={styles.directionHeader}>

            </View>
            <ScrollView style={styles.directionBody}>
              <Text>Cooking Directions blah blah</Text>
              <Button title='Hide' onPress={() => this.setState({visible: false})} />
            </ScrollView>
          </SafeAreaView>
        </SlidingUpPanel>
        {/* {this.state.visible?null:<TouchableHighlight style={styles.tabBarInfoContainer} onPress={() => this.enableDirection()}>
          <View style={styles.tabBarInfoContainer}>
            <Text>Now Cooking</Text>
            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
              <MonoText style={styles.codeHighlightText}>Pasta Carbonara</MonoText>
            </View>
          </View>
        </TouchableHighlight>} */}
      </SafeAreaView>
    )
  }
}

const styles = {
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
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
  slideViewContainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  directionHeader: {
    height: 70,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  directionBody: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
};