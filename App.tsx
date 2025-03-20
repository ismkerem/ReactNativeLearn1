import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigation';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StackNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
