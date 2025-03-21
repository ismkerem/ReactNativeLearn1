import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import {useForm, Controller} from 'react-hook-form';
import {supabase} from '../supabase';

export default function LoginPage() {
  let {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const renderLabelInput = (text: string) => {
    return (
      <View style={styles.labelInput}>
        <Text
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            marginRight: 10,
          }}>
          {text}
        </Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    );
  };

  const onSubmit = async (data: any) => {
    const {error} = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      console.log('Auth Hatası:', JSON.stringify(error, null, 2));
      Alert.alert('Giriş Başarısız', error.message);
    } else {
      console.log('Auth başarılı!');
      Alert.alert('Giriş Başarılı!');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View
          style={{
            width: 270,
            height: 50,
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 19,
              fontFamily: 'bold',
            }}>
            Login
          </Text>
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Geçerli bir e-posta adresi giriniz',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="please enter your email adress"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              textAlignVertical="center"
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}
        <View style={styles.space}></View>
        <Controller
          control={control}
          rules={{
            required: 'password is required',
            maxLength: 30,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="please enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              textAlignVertical="center"
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        <View style={styles.space}></View>

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    borderRadius: 20,
    margin: 20,
    padding: 40,
    borderColor: 'grey',
    borderWidth: 2,
    width: '90%',
    height: '40%',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: 250,
    height: 40,
    borderColor: 'black',
    paddingVertical: 12,
  },
  labelInput: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  inputArea: {
    flexDirection: 'column',
  },
  space: {
    margin: 20,
  },
});
