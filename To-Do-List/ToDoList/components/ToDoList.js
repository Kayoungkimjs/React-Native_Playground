import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({toDos, removeToDo, handleToggle}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {toDos.map(todo => (
        <ToDoListItem key={todo.id} {...todo} removeTodo={removeToDo} handleToggle={handleToggle} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: 30,
  },
});

export default ToDoList;
