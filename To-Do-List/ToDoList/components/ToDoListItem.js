import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ToDoListItem = ({textValue, id, checked, removeToDo, handleToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Text>✔️</Text>
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <TouchableOpacity>
        <Text style={styles.buttonContainer} onPress={removeToDo(id)}>
          💫
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    marginRight: 20,
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
});

export default ToDoListItem;
