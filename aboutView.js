import React, {Component } from 'react';
import { StyleSheet, Text, View, Image, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Avatar from './avatar.png';

const width = 30 * PixelRatio.get();
const height = 30 * PixelRatio.get();

const styles = StyleSheet.create({
  avatar: {
    width: width,
    height: height 
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  }
});


class AboutView extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
          <Image source={Avatar} style={styles.avatar} />
          <Text style={styles.body}>{`
Lorem ipsum dolor sit amet, suas saepe gloriatur eu eos, cu sea eros scribentur, mutat quaeque posidonium cu has. 

Hinc aperiam deterruisset ea duo. Mei putant mollis facilis et. Detraxit similique per ad.
`}</Text>
      </View>
    )
  }
};

export default AboutView;