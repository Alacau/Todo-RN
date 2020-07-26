import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import TodoList from "./screens/TodoList";
 
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="To Do List">
        <Stack.Screen name="To Do List" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;