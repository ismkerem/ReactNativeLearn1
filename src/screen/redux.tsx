import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {addTodo, toggleTodo, removeTodo} from '../redux/todoSlice';

const ReduxPage = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Todo List</Text>
        <TextInput
          style={styles.input}
          placeholder="Yeni görev ekle..."
          value={text}
          onChangeText={setText}
        />
        <Button
          title="Ekle"
          onPress={() => {
            if (text.trim()) {
              dispatch(addTodo(text));
              setText('');
            }
          }}
        />
        <FlatList
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.todoItem}>
              <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                <Text
                  style={[styles.todoText, item.completed && styles.completed]}>
                  {item.text}
                </Text>
              </TouchableOpacity>
              <Button
                title="Sil"
                onPress={() => dispatch(removeTodo(item.id))}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, margin: 20},
  header: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  input: {borderWidth: 1, padding: 10, marginBottom: 10},
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
  todoText: {fontSize: 18},
  completed: {textDecorationLine: 'line-through', color: 'gray'},
});

export default ReduxPage;
