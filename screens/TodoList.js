import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';

import ListEmpty from "../components/ListEmpty";
import TodoItem from "../components/TodoItem";

export default function TodoList() {
    const [textFieldText, setTextFieldText] = useState("");
    const [todoListItems, setTodoListItems] = useState([]);

    return(
        <View style={styles.container} >
            <View style={styles.textField} >
                <TextInput 
                    placeholder="What do you want to do today?"
                    onChangeText={ (currentTextFieldText) => {
                        setTextFieldText(currentTextFieldText);
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button 
                    title="Add item" 
                    color="white" 
                    onPress={ () => {
                        setTodoListItems([
                            {text: textFieldText, key: Math.random().toString(), date: Date.now()}, 
                            ...todoListItems
                        ]);
                    }}
                />
            </View>
            <View style={styles.flatlist}>
                <FlatList 
                    data={todoListItems}
                    renderItem={ ({ item }) => (
                        <TodoItem text={item.text}/>
                    )}
                    ListEmptyComponent={ListEmpty}
                    scrollEnabled={ todoListItems.length == 0 ? false : true }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist: {
        height: "100%",
        paddingTop: 20,
    },
    textField: {
        height: 31,
        borderStyle: "solid",
        borderBottomWidth: 0.5,
        margin: 20,
        justifyContent: "center",
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        height: 44,
        borderRadius: 44 / 2,
        backgroundColor: "pink",
        justifyContent: "center",
    }
})