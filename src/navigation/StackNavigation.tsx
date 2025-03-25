import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/home';
import AxiosPage from '../screen/axios';
import StateManagementPage from '../screen/DrawingScreen';
import ReduxPage from '../screen/redux';
import LoginPage from '../screen/login';
import CanvasPage from '../screen/DrawingScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AxiosPage" component={AxiosPage} />
      <Stack.Screen name="ReduxPage" component={ReduxPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="CanvasPage" component={CanvasPage} />

      <Stack.Screen
        name="StateManagementPage"
        component={StateManagementPage}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
