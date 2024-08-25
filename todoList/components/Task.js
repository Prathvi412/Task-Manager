import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Task = ({ task, completeTask }) => {
  const showTaskDetails = () => {
    Alert.alert(task.text, `Details: ${task.details}\nDate: ${task.date}`);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={showTaskDetails} style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{task.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={completeTask}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Task;
