import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import Todo from './Todo';

export default function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([])
  const [numbers, setNumbers] = useState(1)

  const addTodo = () => {
    setTodos([input, ...todos]);

    setInput('')
  }

  return (
    <SafeAreaView  >
      <View style={styles.container}  >
        <Text style={styles.textsize}>
          🚀 Please! Enter Your TODOS : 😄
        </Text>
        <TextInput
          style={styles.inputText}
          value={input}
          onChangeText={(input) => setInput(input)}

        />
        <Button onPress={addTodo} title='ADD TODO' />
        <ScrollView>
          {todos.map((todo, i) => (
            <Todo key={i} title={todo} />
          ))}

        </ScrollView>


      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'skyblue' },
  inputText: { borderColor: 'blue', height: 40, borderWidth: 1, margin: 20 },
  textsize: { fontSize: 40, color: 'green' }
});
