import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {apiGet, apiPost} from '../api//yelp';
import AppBar from '../components/AppBar';
import {FlatList} from 'react-native-gesture-handler';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function AxiosPage() {
  const [data, setData] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const response = await apiGet.get('/todos');
      setData(response.data);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  const postData = async () => {};

  return (
    <SafeAreaView>
      <View style={styles.page}>
        <AppBar text={'Axios Kütüphanesi'}></AppBar>
      </View>
      <View style={styles.button}>
        <Button onPress={fetchData} title={'fetch data'}></Button>
        <Button onPress={fetchData} title={'post data'}></Button>
        <Button onPress={fetchData} title={'fetch data'}></Button>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {flex: 1, padding: 10, backgroundColor: '#f5f5f5'},
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  button: {
    paddingTop: 10,
    width: 250,
    height: 50,
    margin: 50,
    justifyContent: 'center',
    alignContent: 'space-between',
    flexDirection: 'row',
  },
});
