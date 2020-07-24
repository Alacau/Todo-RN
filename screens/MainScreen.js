import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import AddButton from '../components/AddButton';

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.addButton}>
            <AddButton/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    addButton: {
        position: "absolute",
        right: 20,
        bottom: 20
    }
})

export default MainScreen;