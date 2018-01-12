import React, {Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from './icon.png';

const styles = StyleSheet.create({
  head: { 
    marginLeft: 10,
    textAlignVertical: 'center',
    fontSize: 20,
    color: '#536dff',
  },
  image: {
    width: 40,
    height: 40
  },
  drawerHeader: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10
  },
  menuItem: {
    backgroundColor: '#8f9bff',
    height: 60,
    fontSize: 16,
    color: "#ffffff",
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});


class TabView extends Component {
  textToUpperCase = (text) => {
    return text.split().map(elem => elem.toUpperCase()).join();
  }

  render() {
    return (
      <View>
        <View style={styles.drawerHeader}>
          <Image source={Icon} style={styles.image} />
          <Text style={styles.head}>{this.textToUpperCase('My React App')}</Text>
        </View>
          <TouchableHighlight onPress={() => { Actions.login(); }}>
            <Text style={styles.menuItem}>{this.textToUpperCase('Login')}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { Actions.tableView(); }}>
            <Text style={styles.menuItem}>{this.textToUpperCase('Tasks')}</Text>
          </TouchableHighlight>
         <TouchableHighlight onPress={() => { Actions.aboutView(); }}>
          <Text style={styles.menuItem}>{this.textToUpperCase('About')}</Text>
        </TouchableHighlight>        
      </View>
    )
  }
};

export default TabView;