import React, {Component } from 'react';
import { StyleSheet, Text, View, SectionList, FlatList, Button, CheckBox, TouchableHighlight, Image, PixelRatio } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  head: { 
    minHeight: 40, 
    backgroundColor: '#7cb342'
  },
  headerText: {
    alignSelf: 'center',
    color: "#ffffff",
    fontWeight: 'bold'
  },
  headerBorder: {
    borderWidth: 0
  },
  cellText: { 
    marginLeft: 5,
  },
  row: { 
    minHeight: 40, 
  },
  container: {
    flex: 1,
    backgroundColor: '#8f9bff'
  },
  table: {
    backgroundColor: '#ffffff',
  },
  checkAllText: {
    backgroundColor: '#8f9bff',
    fontSize: 16,
    color: "#ffffff",
    textAlignVertical: 'center',
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  checkAllWrapper: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    marginLeft: 30
  }
});

const tableHead = ['id', 'done', 'task', 'description'];
const tableData = [
      ['1', 'false', 'task number 1', 'to-do-something'],
      ['2', 'false', 'task number 2', 'to-do-something else'],
      ['3', 'false', 'task number 3', 'to-do-something 235253'],
      ['4', 'false', 'task number 4', 'to-do-something 31544 '],
    ];

class TableView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      head:  this.props.data.map(elem => Object.keys(elem))[0],
      value: this.props.data.map(elem => elem === 'true'),
      allChecked: false,
      data: this.props.data.map(elem => Object.values(elem))
    }
  }

  checkAll = () => {
    let data = this.state.value.map(elem => elem = !this.state.allChecked);
    this.setState({
      value: data,
      allChecked: !this.state.allChecked
    });
  }

  createCheckBox = (boolean, index) => {
    return (
        <CheckBox key={index} value={boolean} onValueChange={() => this.updateCheckboxes(index)} />
    )
  }

  updateCheckboxes = (i) => {
    let data = this.state.value;
    data[i] = !data[i];
    this.setState({
      value: data
    });
  }  

  textToUpperCase = (text) => {
    return text.split('').map(elem => elem.toUpperCase()).join('');
  }

  refineRow = (data, i) => {
    data[0] = this.createCheckBox(this.state.value[i], i);
    return data;
  }

  render() {
    let checkAllButtonText = this.state.allChecked ? "Uncheck all tasks" : "Check all tasks"

    return (
      <View style={styles.container}>
        <Table style={styles.table} >
          <Row data={this.state.head} style={styles.head} textStyle={styles.headerText} borderStyle={{borderWidth: 0}} flexArr={[2, 1, 4, 8]} />
            {this.state.data.map((data, i) => (
              <Row key={i} data={this.refineRow(data, i)} style={styles.row} flexArr={[2, 1, 4, 8]} textStyle={styles.cellText} borderStyle={{borderWidth: 1, borderColor: '#e1e2e1'}} />
            ))}
        </Table>
        <View style={styles.checkAllWrapper}>
          <CheckBox value={this.state.allChecked} onValueChange={() => this.checkAll()} />
          <Text style={styles.checkAllText}>{this.textToUpperCase(checkAllButtonText)}</Text>
        </View>
      </View>
    )
  }
};

export default TableView;