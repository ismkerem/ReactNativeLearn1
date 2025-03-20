import {SafeAreaView} from 'react-native';
import StackNavigator from './src/navigation/StackNavigation';

const App = () => {
  return (
    <SafeAreaView>
      <StackNavigator></StackNavigator>
    </SafeAreaView>
  );
};

export default App;
