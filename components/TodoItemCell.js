import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

const TodoItemCell = (props) => {
    return (
        <View style={styles.cell}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cell: {
        width: 300,
        backgroundColor: "indigo",
    }, 
    text: {
        color: "black",
        fontSize: 24,
    }
})

export default TodoItemCell;