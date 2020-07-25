import React from 'react';
import { StyleSheet, Image, SafeAreaView, Text, Platform } from 'react-native'

const TodoListEmpty = () => {
    return(
        <SafeAreaView style={styles.view}>
            <Image source={require('../assets/empty-list.png')} style={styles.image} />
            <Text style={styles.text}>The todo list is empty. Add something to do!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center"
    },
    image: {
        width: 350,
        height: 350
    },
    text: {
        fontSize: 24,
        fontFamily: "Avenir Next",
        textAlign: "center"
    }
})

export default TodoListEmpty;