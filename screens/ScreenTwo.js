import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ScreenTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        {/* <Text> Username is {this.props.navigation.state.params.P1} </Text> */}
        <Text style={styles.input}>Kreate User name is :{this.props.route.params.username} </Text>
        <Text style={styles.input}>Kreate password is :{this.props.route.params.password} </Text>
        <Text style={styles.input}>Kreate email id is :{this.props.route.params.email} </Text>
        <Text style={styles.input}>Kreate Phone no is :{this.props.route.params.phone_number} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      margin: 10,
      padding: 8,
      color: 'red',
      borderRadius: 14,
      fontSize: 20,
      fontWeight: '500',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })