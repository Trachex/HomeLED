import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';

import confStore from './confStore';

import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import ItemScreen from './screens/ItemScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  AddItem: { screen: AddItemScreen },
  Item: { screen: ItemScreen }
});

const Navigation = createAppContainer(MainNavigator);

const store = confStore();

const App = () => (
    <Provider store={store}>
      <Navigation />
    </Provider>
);

export default App;