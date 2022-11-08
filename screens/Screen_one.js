import React, { Component } from 'react';
import { View, Text,Button, TextInput} from 'react-native';

export default class Screen_one extends Component {
  constructor(props) {
    super(props);
    this.state = { username:''};
  }

  render() {
    return (
      <View >
       <TextInput
        placeholder='Enter Name'
        style ={{borderBottomWidth:1,borderBottomColor:'#aff0000',marginBottom:20}}
        onChangeText={username=>this.setState({username})}
        >
      
        </TextInput>
      
      
        <Button title ="Login"
        onPress={()=>this.props.navigation.navigate('Screen_two',{username:this.state.username})} >
        </Button>
      </View>
    );
  }
}
