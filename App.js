import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'
import AddScreen from'./components/AddScreen'
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Add: AddScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
