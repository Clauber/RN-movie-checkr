import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './Pages/main.page';
import Movie from './Pages/movie.page';
import Another from './Pages/another.page';

const MainNavigator = createStackNavigator(
  {
    Main,
    Movie,
    Another,
  },
  {
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
    // initialRouteName: 'Main',
  },
);
const App = createAppContainer(MainNavigator);

export default App;
