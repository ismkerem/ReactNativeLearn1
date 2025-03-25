import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearCanvas} from '../redux/drawingSlice';
import Canvas from './Canvas';

const CanvasPage = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Canvas />
      <Button title="Temizle" onPress={() => dispatch(clearCanvas())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default CanvasPage;
