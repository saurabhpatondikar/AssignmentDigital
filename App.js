//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import{StyleSheet,Text,View} from "react-native";
import {addition} from "./Reducer/storeReducer";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from "./Components/Screen2";
import Screen3 from "./Components/Screen3";
import Screen1 from "./Components/Screen1";
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
const store=createStore(addition,applyMiddleware(thunk))
const Stack = createStackNavigator();

export default function App() {
  return (
<Provider store={store}>
   <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen name={"Screen1"} component={Screen1} options={{headerShown:false}}/>
           <Stack.Screen name={"Screen2"} component={Screen2} options={{headerShown:false}}/>
           <Stack.Screen name={"Screen3"} component={Screen3} options={{headerShown:false}}/>
       </Stack.Navigator>
   </NavigationContainer>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
