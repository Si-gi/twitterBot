import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";


export default class BotPostAuto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "reponse",
            botName: "",
            response:  "",
            command: ""
        };
    }

    handleBotNameChange = botName => {
        this.setState({ botName });
    }

    handlewordChange = (command) => {
        this.setState({command} );
    }

    handleResponseChange = response => {
        this.setState({response });
    }

    render() {
        return (
            <View>
                <Text h2>Bot</Text>

                <TextInput placeholder="Bot name" value={this.state.botName} onChangeText={this.handleBotNameChange} style={styles.input} />

                <View style={styles.dictionnaire}>
                    <TextInput placeholder="Commande " style={styles.inputDico} value={this.command} onChangeText={(command) => this.handlewordChange(command)} />
                    <TextInput placeholder="tweet réponse" style={styles.inputDico} value={this.state.response} onChangeText={(response) => this.handleResponseChange(response)} />
                </View>

                <Button
                    color = "blue"
                    onPress={() => this.props.route.params.addBot(this.state)}
                    icon={
                        <Ionicons
                            name={"arrow-redo-outline"}
                            size={10}
                            color={"white"} />
                    }
                    title=" Bot réponse auto"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#ececec",
        borderRadius: 10,
        padding: 10,
        margin: 20,
    },
    inputDico: {
        backgroundColor: "#ececec",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        flex: 0.5,
    },
    dictionnaire: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch",
    },
});