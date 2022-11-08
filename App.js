import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen_one from './screens/Screen_one';
import ScreenTwo from './screens/ScreenTwo';
import Form from './screens/Form';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Screen_one" component={Screen_one} />
        <Stack.Screen name="Screen_two" component={ScreenTwo}/>
        <Stack.Screen name="Form" component={Form}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;