import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type AppBarPropse = {
  text: String;
};

export const AppBar = ({text}: AppBarPropse) => {
  return (
    <View style={styles.appBar}>
      <View style={styles.leading}>
        <MaterialIcons
          name="house"
          color="#ff0000"
          style={styles.leading}
          size={35}
        />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textStyle}>{text} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'dodgerblue',
    width: '100%',
    height: 45,
    flexDirection: 'row',
  },
  leading: {
    width: 60,
    height: 40,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
  },
  textArea: {
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppBar;
