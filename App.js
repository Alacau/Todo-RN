import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddButton from './components/AddButton'

const App = () => {
  return(
    <View style={styles.addButton}>
      <AddButton/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  addButton: {
    justifyContent: "flex-end"
  }
})

export default App;