import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/home';
import AxiosPage from '../screen/axios';
import StateManagementPage from '../screen/stateManagemnt';
import ReduxPage from '../screen/redux';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AxiosPage" component={AxiosPage} />
      <Stack.Screen name="ReduxPage" component={ReduxPage} />

      <Stack.Screen
        name="StateManagementPage"
        component={StateManagementPage}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
