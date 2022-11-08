import React,{ Component } from "react";
import {
    View,
    Button,
    TextInput,
    StyleSheet
  } from 'react-native'
  
  export default class SignUp extends Component {
    // state = {
    //   username: '', password: '', email: '', phone_number: ''
    // }
    // onChangeText = (key, val) => {
    //   this.setState({ [key]: val })
    // }
    // signUp = async () => {
    //   const { username, password, email, phone_number } = this.state
    //   try {
    //     // here place your signup logic
    //     console.log('user successfully signed up!: ', success)
    //   } catch (err) {
    //     console.log('error signing up: ', err)
    //   }
    // }
   
    constructor(props) {
        super(props);
        this.state = { username:'',password:'',email:'',phone_number:''};
       
      }
    render() {
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Username'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={username=>this.setState({username})}

            // onChangeText={val => this.onChangeText('username', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={password=>this.setState({password})}

            // onChangeText={val => this.onChangeText('password', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={email=>this.setState({email})}

            // onChangeText={val => this.onChangeText('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone Number'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={phone_number=>this.setState({phone_number})}

            // onChangeText={val => this.onChangeText('phone_number', val)}
          />
          <Button
            title='Sign Up'
            // onPress={this.signUp}
            onPress={() => 
                this.props.navigation.navigate('Screen_two',{
                    username:this.state.username,
                    password:this.state.password,
                    email:this.state.email,
                    phone_number:this.state.phone_number})} 
                    />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
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