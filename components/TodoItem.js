import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function TodoItem({ text }) {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
    }
})