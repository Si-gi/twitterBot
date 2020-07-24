import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BotMenu from './BotMenu';
import BotPostAuto from './autoPost/BotPostAuto';
import BotReponseAuto from './autoResponse/BotReponseAuto';
import ManageBotPostAuto from './autoPost/ManageBotPostAuto';
import ManageBotReponseAuto from './autoResponse/ManageBotReponseAuto';

const Stack = createStackNavigator();

export default class Settings extends React.Component {

    render() {
        return (
            <Stack.Navigator initialRouteName="BotMenu" screenOptions={
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
                <Stack.Screen name="BotMenu" component={BotMenu} options={{ title: "Bots" }} />
                <Stack.Screen name="BotPostAuto" component={BotPostAuto} options={{ title: "Bot post automatique" }} />
                <Stack.Screen name="BotReponseAuto" component={BotReponseAuto} options={{ title: "Bot réponse automatique" }} />
                <Stack.Screen name="ManageBotPostAuto" component={ManageBotPostAuto} options={{ title: "Bot" }} />
                <Stack.Screen name="ManageBotReponseAuto" component={ManageBotReponseAuto} options={{ title: "Bot" }} />
            </Stack.Navigator>
        );
    }

}