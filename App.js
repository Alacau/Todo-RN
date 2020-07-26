import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import TodoList from "./screens/TodoList";

import PushNotificationIOS from "@react-native-community/push-notification-ios";
let PushNotification = require("react-native-push-notification");

PushNotification.configure({
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  requestPermissions: true,
});
 
const Stack = createStackNavigator();

const App = () => {
  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    /* iOS and Android properties */
    title: "Reminder!", // (optional)
    message: "Did you finish your your daily tasks?", // (required)
    date: new Date(Date.now() + 60 * 1000), // in 60 secs
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="To Do List">
        <Stack.Screen name="To Do List" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;