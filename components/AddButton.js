import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AddButton = () => {
  return(
        <TouchableOpacity onPress={handleCreateTodo}>
            <Image
                source={require('../assets/add.png')}
                style={styles.image}
            />
        </TouchableOpacity>        
  );
}

const handleCreateTodo = () => {
    // Bring up a new screen to create a todo item
}

const styles = StyleSheet.create({
    image: {
        width: 72,
        height: 72,
        borderRadius: 72/ 2,
        backgroundColor: "#FF5E5E",
        resizeMode: "center",
        aspectRatio: 1
    },
})

export default AddButton;