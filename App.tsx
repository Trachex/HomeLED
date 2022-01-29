import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import ItemScreen from './screens/ItemScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  AddItem: { screen: AddItemScreen },
  Item: { screen: ItemScreen }
});

const Navigation = createAppContainer(MainNavigator);

const App = () => (
    <View>
      <Navigation />
    </View>
);

export default App;