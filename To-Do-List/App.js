import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import DefaultToDo from './ToDoList/components/DefaultToDo';
import ToDoList from './ToDoList/components/ToDoList';

const App = () => {
  const [toDos, setToDos] = useState([]);
  const addToDo = text => {
    setToDos([...toDos, {id: Math.random().toString(), textValue: text, checked: false}]);
  };

  const removeToDo = id => e => {
    setToDos(toDos.filter(todo => todo.id !== id));
  };

  const handleToggle = id => e => {
    setTodos(
      toDos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <DefaultToDo addToDo={addToDo} />
      <ScrollView>
        <ToDoList toDos={toDos} removeToDo={removeToDo} handleToggle={handleToggle}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01C7AE',
  },

  title: {
    padding: 70,
    textAlign: 'center',
    color: '#323232',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
