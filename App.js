import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import AddButton from './components/AddButton'

const App = () => {
  return(
    <SafeAreaView style={styles.addButton}>
      <AddButton/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20
  }
})

export default App;