import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/home';
import AxiosPage from '../screen/axios';
import StateManagementPage from '../screen/stateManagemnt';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AxiosPage" component={AxiosPage} />
        <Stack.Screen
          name="StateManagementPage"
          component={StateManagementPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
