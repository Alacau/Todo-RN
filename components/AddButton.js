import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AddButton = () => {
  return(
    <TouchableOpacity onPress={handleCreateTodo}>
        <Image
            source={require('../assets/add.png')}
            resizeMode="center"
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
        width: 96,
        height: 96,
        borderColor: "#000",
        borderRadius: 96 / 2,
        borderWidth: .5
    },
})

export default AddButton;