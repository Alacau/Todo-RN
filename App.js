import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text, Button } from 'react-native';
import MainScreen from './screens/MainScreen'
import CreateToDoItemScreen from './screens/CreateTodoItemScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title= "Go to details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Button title="Go to Details...again" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Todo">
        <Stack.Screen name="Todo" component={MainScreen} />
        <Stack.Screen name="Create a Todo Item" component={CreateToDoItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;