import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useEffect, useState } from 'react';


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  const [text, onChangeText] = useState("");
  const [todos, setTodos] = useState([]);

  const removeTodoItem = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
    console.log("deleting item id: " + id);
  }
 
  const handleAddTodo = () => {
    setTodos(todos => [...todos, {title: text, id: Math.random().toString() }]);
    
  }
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  
  console.log(todos);

  const renderItem = ({ item }) => (
    <View>
      <Item title={item.title} />
      <Button onPress={removeTodoItem.bind(this, item.id)} title="Delete"></Button>
    </View>
  );

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

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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

