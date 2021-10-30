import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const DefaultToDo = ({addToDo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const handleInput = newToDo => {
    setNewTodoItem(newToDo);
  };

  const handleButton = () => {
    onAddToDo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputContatiner}>
      <TextInput
        placeholder="Priority First! :)"
        style={styles.input}
        onChangeText={handleInput}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View style={styles.submitButton}>
        <Button title={'+'} onPress={handleButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
  },

  input: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'normal',
    borderColor: '#323232',
    width: '80%',
    borderBottomWidth: 1,
  },

  submitButton: {
    width: 40,
    height: 40,
    marginRight: 20,
    color: '#FFFFFF',
    backgroundColor: '#323232',
    borderRadius: 50,
  },
});

export default DefaultToDo;
