import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppBar from '../components/AppBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';

const list = [
  {pageName: 'AxiosPage', color: 'white'},
  {pageName: 'StateManagementPage', color: 'dark'},
  {pageName: 'ReduxPage', color: 'white'},
  {pageName: 'CriptoPage', color: 'white'},
];

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.page}>
        <AppBar text={'Merhaba'} />
      </View>
      <View
        style={{
          alignContent: 'center',
          flex: 1,
        }}>
        <FlatList
          data={list}
          keyExtractor={item => item.pageName}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.pageButton,
                {
                  backgroundColor: 'grey',
                  alignContent: 'center',
                  justifyContent: 'center',
                  margin: 45,
                },
              ]}
              onPress={() => navigation.navigate(item.pageName)}>
              <Text style={styles.text}>{item.pageName}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1},
  pageButton: {
    width: 290,
    height: 55,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    zIndex: 5,
  },
});

export default HomeScreen;
