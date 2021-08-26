import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = () => {
    setTodos(todos => [...todos, text]);
    console.log(todos);
  }


  return (
    <View style={styles.container}>
      <Text>Our first Todo app</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button
        title="Add Todo"
        onPress={handleAddTodo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

