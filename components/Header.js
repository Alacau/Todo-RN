import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>To Do List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 96,
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: "Avenir Next",
        fontSize: 24,
        fontWeight: "500",
        paddingTop: 32
    }
})