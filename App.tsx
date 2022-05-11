import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './app/store';

import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import ItemScreen from './screens/ItemScreen';
import UpdateItemScreen from './screens/UpdateItemScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  AddItem: { screen: AddItemScreen },
  Item: { screen: ItemScreen },
  UpdateItem: { screen: UpdateItemScreen }
});

const Navigation = createAppContainer(MainNavigator);

const App = () => (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
);

export default App;