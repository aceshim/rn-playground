import React from 'react';
import { View, Text, TouchableHighlight, Separator, ScrollView, SafeAreaView } from 'react-native';
import { Header, List, ListItem, SearchBar } from 'react-native-elements'
import Swipeout from 'react-native-swipeout';
import Toast from '@rimiti/react-native-toastify';

export default class Cart extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state={
          selected: [true, true, true, true, true, true, true, true],
          selectAll: false,
          searchTerm: '',
        }
        this._onChangeSearchTerm = this._onChangeSearchTerm.bind(this);
    
      }

    _onChangeSearchTerm(searchTerm){
        this.setState({
          searchTerm: searchTerm,
        })
        this.forceUpdate()
      }

    render(){

        let swipeBtnsRight = [{
            text: 'Delete',
            backgroundColor: 'red',
            // underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => { () => this.toastify.show('Delete !', 1000) }
        }];
        let swipeBtnsLeft = [{
            text: 'Check',
            backgroundColor: 'green',
            // underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => { () => this.toastify.show('Check !', 1000) }
        }];

        const list = [
            {
                title: 'Spagetti',
                icon: 'av-timer',
                quantity: '1',
            },
            {
                title: 'Kimchi',
                icon: 'flight-takeoff',
                quantity: '1',
            },
            {
                title: 'Chicken',
                icon: 'fingerprint',
                quantity: '1',
            },
            {
                title: 'Beef',
                icon: 'call',
                quantity: '1',
            },
            {
                title: 'Pork',
                icon: 'list',
                quantity: '1',
            },
            {
                title: 'Spagetti',
                icon: 'av-timer',
                quantity: '1',
            },
            {
                title: 'Kimchi',
                icon: 'flight-takeoff',
                quantity: '1',
            },
            {
                title: 'Chicken',
                icon: 'fingerprint',
                quantity: '1',
            },
            {
                title: 'Beef',
                icon: 'call',
                quantity: '1',
            },
            {
                title: 'Pork',
                icon: 'list',
                quantity: '1',
            },
        ]

        return (
            <SafeAreaView style={styles.container}>
                <Header
                leftComponent={{ icon: 'arrow-back', color: '#fff' }}
                centerComponent={{ text: 'CART', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={{ icon: 'help', color: '#fff' }}
                />
                <ScrollView contentOffset={{x:0, y:56}} style={{borderWidth: 0}}>
                    <SearchBar
                    lightTheme
                    round
                    // onChangeText={someMethod}
                    // onClearText={someMethod}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Type Here...'
                    containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                    inputStyle={{paddingLeft: 33}}
                    clearButtonMode={'always'}
                    onChangeText={(text)=>this._onChangeSearchTerm(text)}
                    />
                    <List containerStyle={{marginTop: 0}}>
                        {
                            list.map((item, i) => (
                                <Swipeout
                                    key={i}
                                    right={swipeBtnsRight}
                                    left={swipeBtnsLeft}
                                    autoClose={true}
                                    sensitivity={10}
                                    backgroundColor= 'transparent'>
                                    <ListItem
                                        key={item.title}
                                        title={item.title}
                                        titleStyle={styles.cartItems}
                                        subtitle={`Quantity: `+item.quantity}
                                        leftIcon={{name: item.icon}}
                                        rightIcon={{name: 'info', }}
                                        containerStyle={styles.cartItemsContainer}
                                    />
                                </Swipeout>
                            ))
                        }
                    </List>
                </ScrollView>
                <Toast ref={(c) => this.toastify = c} />
                {/* <Swipeout right={swipeBtns}
                    autoClose='true'
                    backgroundColor= 'transparent'>

                </Swipeout> */}
            </SafeAreaView>
        )
    }
}

const styles={
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartItems:{
      fontSize: 20,
      fontWeight: '500'
  },
}