import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import ListUserS from "./ListUserS";
import SingleUser from "./SingleUser";
import { Ionicons } from "react-native-vector-icons";
import SearchUser from "./SearchUser";

const Stack = createStackNavigator();

export default class Stats extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="ListUserS" screenOptions={
                {
                    headerStyle: {
                        backgroundColor: "#3A3E42",
                    },
                    headerTitleStyle: {
                        color: "#fff"
                    },
                    headerTintColor: "blue"
                }
            }>
                <Stack.Screen name="SingleUser" component={SingleUser} />
                <Stack.Screen name="AddUser" component={SearchUser} options={{title: "Rechercher"}}/>
                <Stack.Screen name="ListUserS" component={ListUserS} options={
                    { 
                        title: "Favoris",
                        headerRight: () => (
                            <TouchableOpacity 
                                style={{marginRight: 10}}
                                onPress={
                                    () => { this.props.navigation.navigate("AddUser");}
                                }
                            >
                                <Ionicons
                                    name={"ios-search"}
                                    size={23}
                                    color={"blue"}
                                />
                            </TouchableOpacity>
                        ) 
                    }
                } />

            </Stack.Navigator>
        );
    }

}