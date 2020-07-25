import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, TextInput } from 'react-native';

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import ListEmpty from "./components/ListEmpty";

const todoItems = [
  
];
 
const App = () => {
  const [text, setText] = useState();

  const renderItem = ({ item }) => {
    return (
      <TodoItem text={item.text} setText={setText}/>
    );
  }  

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.textField}>
        <TextInput 
          placeholder="What do you want to do today?"
          onChangeText={(text) => console.log(text)}
          onSubmitEditing={handleAddItem}
        />
      </View>
      <View style={styles.button}>
        <Button title="Add to list" color="white" onPress={handleAddItem}/>
      </View>
      <FlatList 
        data={todoItems} 
        renderItem={renderItem} 
        ListEmptyComponent={ListEmpty} 
        scrollEnabled={
          todoItems.length == 0 ? false : true
        }
        style={styles.flatlist}
      />
    </View>
  );
}

const handleAddItem = (text) => {
  console.log(text)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FF5E5E",
    height: 48,
    borderRadius: 48 / 2,
    justifyContent: "center"
  },
  flatlist: {
    paddingTop: 8
  },
  textField: {
    borderBottomWidth: 1,
    margin: 20,
    padding: 8
  }
})

export default App;