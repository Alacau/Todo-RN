import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function TodoItem({ text }) {
    return(
        <TouchableOpacity style={styles.container}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginTop: 16,
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        alignItems: "center",
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 20 / 2,
    },
})