import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './app/store';

import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import ItemScreen from './screens/ItemScreen';
import UpdateItemScreen from './screens/UpdateItemScreen';

const headerOpt = {
  headerStyle: { backgroundColor: "#6200EE" },
  headerTintColor: "#FFF"
};

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: headerOpt },
  AddItem: { screen: AddItemScreen, navigationOptions: { title: "Add a light", ...headerOpt } },
  Item: { screen: ItemScreen, navigationOptions: { title: "Control Panel", ...headerOpt } },
  UpdateItem: { screen: UpdateItemScreen, navigationOptions: { title: "Configure light", ...headerOpt } }
});

const Navigation = createAppContainer(MainNavigator);

const App = () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
);

export default App;