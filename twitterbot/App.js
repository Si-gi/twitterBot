import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Stats from "./Components/Stats/Stats";
import Bot from "./Components/Bot/Bot";
import {Provider} from "react-redux";
import configureStore from "./Store/configureStore";
const {store, persistor} = configureStore();
import { PersistGate } from "redux-persist/integration/react";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === "Stats") {
                                    iconName = "md-analytics";
                                } else if (route.name === "Bot") {
                                    iconName = "logo-android";
                                }

                                return <Ionicons name={iconName} size={size} color="white" />;
                            }
                        })}
                        tabBarOptions={{
                            style: {
                                backgroundColor: "#3A3E42",
                            }
                        }}
                    >
                        <Tab.Screen name="Stats" component={Stats} />
                        <Tab.Screen name="Bot" component={Bot} />
                    </Tab.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
