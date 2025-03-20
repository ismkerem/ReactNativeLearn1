import {View, Text, StyleSheet} from 'react-native';
import AppBar from '../components/AppBar';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <AppBar text={'Merhaba'}></AppBar>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default HomeScreen;
