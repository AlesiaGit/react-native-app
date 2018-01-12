import React, {Component } from 'react';
import { StyleSheet, Text, View, SectionList, FlatList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Router, Scene, Stack, Drawer} from 'react-native-router-flux';

import tableView from "./tableView";
import aboutView from "./aboutView";
import tabView from "./tabView";
import login from "./login";

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#aee571'
  },
  title: {
    color: '#000000'
  }
});

export default class App extends Component {
  render() {
    return (
      <Router titleStyle={styles.title} navigationBarStyle={styles.navBar} >
      <Stack key="root">
        <Scene key="login" component={login} title="Login" initial/>
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={tabView}
          >
          <Scene  key="tableView" component={tableView} title="List of tasks"  />
          <Scene key="aboutView" component={aboutView} title="About author" />
        </Drawer>
        </Stack>
      </Router>
      );
   }
}
