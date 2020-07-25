import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, TouchableOpacity, Image } from 'react-native';

import TodoItemCell from '../components/TodoItemCell';
import TodoListEmpty from '../components/TodoListEmpty';

const dummyData = [
    {key: "", title: "First item"}
];

const MainScreen = ({ navigation }) => {
    const renderItem = ({item, index, separators}) => {
        return (
            <TodoItemCell text={item.title}/>
        );
    }

    return (
        <View style={styles.view}>
            <FlatList data={dummyData} renderItem={renderItem} ListEmptyComponent={TodoListEmpty} scrollEnabled={false}/>
            <SafeAreaView style={styles.addButton}>
                <TouchableOpacity onPress={() => navigation.navigate("Create a Todo Item")}>
                    <Image
                        source={require('../assets/add.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
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
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 72/ 2,
        backgroundColor: "#FF5E5E",
        resizeMode: "center",
        aspectRatio: 1
    },
})

export default MainScreen;