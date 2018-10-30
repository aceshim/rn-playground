import React from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {
    SCLAlert,
    SCLAlertButton
  } from 'react-native-scl-alert'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  state = {
    show: true,
  }

  handleOpen = () => {
    this.setState({
      show: true,
    })
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    const concepts = ["default", "inverse", "success", "info", "danger", "warning"]
    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}

          <Button title="success" onPress={this.handleOpen} />
          <SCLAlert
          theme="warning"
          show={this.state.show}
          title="Lorem"
          subtitle="Lorem ipsum dolor"
          onRequestClose={this.handleClose}
          >
          <SCLAlertButton theme="default" onPress={this.handleClose}>Undo</SCLAlertButton>
          <SCLAlertButton theme="warning" onPress={this.handleClose}>Done</SCLAlertButton>
          </SCLAlert>
        {/* <ExpoLinksView /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
