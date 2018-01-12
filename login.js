import React, {Component } from 'react';
import { StyleSheet, Text, View, Image, PixelRatio, TouchableHighlight, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import firebaseApp from "./firebaseApp";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  form: {
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    height: 40, 
  },
  buttonsWrapper: {
    marginLeft: 30,
    marginRight: 30
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

      this.state = {
        email: '',
        password: '',
        user: '',
        signInButton: true,
        signUpButton: true,
        data: ''
      }
  }

  componentWillMount() {
    this.getData();
    let user = firebaseApp.auth().currentUser;
    this.unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        //change color further
      }
    });
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  textToUpperCase = (text) => {
    return text.split('').map(elem => elem.toUpperCase()).join('');
  }

  toggleSignUpButton = () => {
    if (firebaseApp.auth().currentUser) {
      firebaseApp.auth().signOut();
    }
    this.signUpUser();
  }

  signUpUser = () => {
    if (this.state.email.length < 4) return alert('Please enter an email address.');
    if (this.state.password.length < 4) return alert('Please enter a password.');
  
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((success) => {
      this.setState({
        email: '',
        password: '',
        user: firebaseApp.auth().currentUser
      }, () => Actions.tableView({data: this.state.data}))
    })
    .catch((error) => {
        error.code === 'auth/wrong-password' ? alert('Wrong password') : console.log('error', error.message);
    });
  }

  toggleSignInButton = () => {
    this.signInUser();
  }

  signInUser = () => {
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((success) => {
        this.setState({
        email: '',
        password: '',
        user: firebaseApp.auth().currentUser
      }, () => Actions.tableView({data: this.state.data}));
    })
    .catch((error) => {
      error.code === 'auth/wrong-password' ? alert('Wrong password') : console.log('error', error.message);
    });  
  }

  getData = () => {
    firebaseApp.database().ref('tasks/').on('value', (snapshot) => {
      let array = snapshot.val();
      this.setState({
        data: array
      });
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.form}>
        <Text>Email: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />
        <Text>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
        />
        </View>
        <View style={styles.buttonsWrapper}>
          <Button onPress={() => this.toggleSignInButton()} title={this.textToUpperCase('log in')} color="#7cb342" />
          <Button onPress={() => this.toggleSignUpButton()} title={this.textToUpperCase('new user')} color="#8f9bff" />
        </View>
      </View>
    )
  }
};

export default Login;