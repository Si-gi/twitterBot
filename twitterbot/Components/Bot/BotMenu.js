import React from "react";
import { StyleSheet, View, TextInput, ScrollView} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { Text, Button, ListItem, Icon } from "react-native-elements";

export default class BotMenu extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        bots: []
    }
    addBot = (bot) => {
        this.setState(prevState => ({
            bots: [...prevState.bots, bot]
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text h1>Liste des bots</Text>
                <View style={styles.containerButtons}>
                    <Button
                        buttonStyle={styles.buttons}
                        onPress={() => this.props.navigation.navigate("BotPostAuto", {
                            addBot: bot => this.addBot(bot)
                        })}
                        icon={
                            <Ionicons
                                name={"arrow-redo-outline"}
                                size={15}
                                color={"white"} />
                        }
                        title=" Créer un bot de post automatique"
                    />
                    <Button
                        buttonStyle={styles.buttons}
                        onPress={() => this.props.navigation.navigate("BotReponseAuto", {
                            addBot: bot => this.addBot(bot)
                        })}
                        icon={
                            <Ionicons
                                name={"ios-at"}
                                size={15}
                                color={"white"} />
                        }
                        title=" Créer un bot de réponse automatique"
                    />
                </View>
                <View style={styles.containerList}>

                    <ScrollView style={styles.scrollView}>
                        {
                            this.state.bots.map((bot, index) => (
                                <ListItem
                                    key={index}
                                    leftAvatar= "/assets/img/bot.png"
                                    title={
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ marginRight: 5 }}>{bot.botName}</Text>
                                        </View>
                                    }
                                    bottomDivider
                                    subtitleStyle={{ color: "blue" }}
                                    chevron={{ color: "blue" }}
                                    onPress={() => {
                                        if (bot.type == "post") {
                                            this.props.navigation.navigate("ManageBotPostAuto", { bot: bot });

                                        } else {
                                            this.props.navigation.navigate("ManageBotReponseAuto", { bot: bot });
                                        }
                                    }}
                                />
                            ))
                        }
                    </ScrollView>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },
    containerButtons: {
        flex: 0.2,
        justifyContent: "space-around",
    },
    containerList: {
        flex: 0.8
    },
    scrollView: {
        marginTop: 10,
    },
    buttons: {
        backgroundColor: "blue"
    },
});