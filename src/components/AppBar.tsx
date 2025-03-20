import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type AppBarPropse = {
  text: String;
};

export const AppBar = ({text}: AppBarPropse) => {
  return (
    <View style={styles.appBar}>
      <View style={styles.leading}>
        <MaterialIcons name="house" color="#ff0000" size={20} />
      </View>
      <Text style={{backgroundColor: 'white'}}>{text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'blue',
    width: 100,
    height: 30,
  },
  leading: {
    width: 30,
    height: 30,
  },
});

export default AppBar;
