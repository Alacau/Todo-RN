import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const TodoItemCell = (props) => {
    return (
        <TouchableOpacity style={styles.cell}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cell: {
        width: "100%",
        height: 72,
        justifyContent: "center",
        backgroundColor: "white"
    }, 
    text: {
        color: "black",
        fontSize: 24,
        left: 20,
        backgroundColor: "white",
    }
})

export default TodoItemCell;