import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Todo = ({ title }) => {
    return (
        <View>
            <Text style={styles.textsize}> ✅ {title}. </Text>
        </View>
    )
}



const styles = StyleSheet.create({

    textsize: { fontSize: 25, color: 'blue', fontFamily: 'Book Antiqua' }
});

export default Todo
