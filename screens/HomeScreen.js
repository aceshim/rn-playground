import React from 'react';
import {View, Button, Text, Platform, TouchableHighlight, SafeAreaView, ScrollView} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';
import { MonoText } from '../components/StyledText';

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// }

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
      <View style={styles.container}>
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
        {this.state.visible?null:<TouchableHighlight style={styles.tabBarInfoContainer} onPress={() => this.enableDirection()}>
          <View style={styles.tabBarInfoContainer}>
            <Text>Now Cooking</Text>
            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
              <MonoText style={styles.codeHighlightText}>Pasta Carbonara</MonoText>
            </View>
          </View>
        </TouchableHighlight>}
      </View>
    )
  }
}

const styles = {
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
    alignItems: 'center',
    justifyContent: 'center',
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