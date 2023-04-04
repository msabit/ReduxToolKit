import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleTodo, deleteTodo} from './todosSlice';
export function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleToggle = id => {
    dispatch(toggleTodo(id));
  };
  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };
  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      {todos.map((todo, index) => (
        !todo.delete && (
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => handleToggle(todo.id)}
            style={styles.textContainer}>
            <Text
              style={{
                ...styles.todoText,
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}
              key={todo.id}>{`${index + 1}. ${todo.text}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDelete(todo.id)}
            style={styles.deleteBtnContainer}>
            <Text style={styles.todoText}>Delete</Text>
          </TouchableOpacity>
        </View>
        )
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoText: {
    width: '90%',
    height: 30,
  },
  btnContainer: {
    width: '80%',
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
  },
  deleteBtnContainer: {
    height: '60%',
    width: '15%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
