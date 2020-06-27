import { StyleSheet, Text, View, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchForm from './views/SearchResult';
import React, { Component } from 'react';


const Stack = createStackNavigator();


export default class App extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen name="SearchForm" component={SearchForm}
                      options={({ route
                      }) => ({ q: 5 })}
        ></Stack.Screen>
        </Stack.Navigator>
              </NavigationContainer>
        );
  }

}
