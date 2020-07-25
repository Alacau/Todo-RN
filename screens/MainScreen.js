import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View } from 'react-native';

import AddButton from '../components/AddButton';
import TodoItemCell from '../components/TodoItemCell';
import TodoListEmpty from '../components/TodoListEmpty';

const dummyData = [
    {id: "123", title: "First item"}
];

const MainScreen = () => {
    const renderItem = ({item, index, separators}) => {
        return (
            <TodoItemCell text={item.title}/>
        );
    }

    return (
        <View style={styles.view}>
            <FlatList data={dummyData} renderItem={renderItem} ListEmptyComponent={TodoListEmpty} scrollEnabled={false}/>
            <SafeAreaView style={styles.addButton}>
                <AddButton/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    addButton: {
        position: "absolute",
        right: 20,
        bottom: 20
    },

    flatlist: {
        backgroundColor: "#E5E5E5"
    }, 
    
    view: {
        flex: 1, 
    }
})

export default MainScreen;