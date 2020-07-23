import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import ListUserS from "./ListUserS";
import SingleUser from "./SingleUser";

import SearchUser from "./SearchUser";

const Stack = createStackNavigator();

export default class Stats extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="ListUserS">
                <Stack.Screen name="SingleUser" component={SingleUser} />
                <Stack.Screen name="SearchUser" component={SearchUser} options={{title: "Rechercher"}}/>
                <Stack.Screen name="ListUserS" component={ListUserS} options={
                    { 
                        title: "Favoris",
                        headerRight: () => (
                            <TouchableOpacity 
                                style={{marginRight: 10}}
                                onPress={
                                    () => { this.props.navigation.navigate("SearchUser");}
                                }
                            >
                            </TouchableOpacity>
                        ) 
                    }
                } />

            </Stack.Navigator>
        );
    }

}