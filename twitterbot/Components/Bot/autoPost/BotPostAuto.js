import React from "react";
import { StyleSheet, View, TextInput, Picker, TouchableOpacity, Switch, Alert } from "react-native";
import { Text, Button } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import twitter from "react-native-simple-twitter";

export default class BotPostAuto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'post',
            botName: "",
            tweet: "",
            displayTime: false,
            interval: ""
        };
    }

    confirmBot() {
        Alert.alert(
            "Confirmation de votre bot",
            `Nom : ${this.state.botName}\nContenu : ${this.state.tweet}\nHeure : ${this.state.displayTime}\nIntervalle : ${this.state.interval}`,
            [
                {
                    text: "Oui",
                    onPress: () => {
                        this.props.route.params.addBot(this.state);
                        this.props.navigation.navigate("BotMenu");
                    }
                },
                {
                    text: "Annuler"
                }
            ]
        );
    }

    handleBotNameChange = botName => {
        this.setState({ botName });
    }

    handlePickerChange = interval => {
        this.setState({ interval });
    }

    handleSwitchChange = displayTime => {
        this.setState({ displayTime });
    }

    handleTweetChange = tweet => {
        this.setState({ tweet });
    }

    render() {
        return (
            <View>
                <Text h2>Bot</Text>

                <TextInput placeholder="Nom de votre bot" value={this.state.botName} onChangeText={this.handleBotNameChange} style={styles.input} />
                <TextInput placeholder="Votre tweet" value={this.state.tweet} onChangeText={this.handleTweetChange} style={styles.input} />
                <View style={styles.switchView}>
                    <Text style={{ fontWeight: "bold" }}>Afficher l'heure dans vos tweet</Text>
                    <Switch
                        value={this.state.displayTime}
                        onValueChange={this.handleSwitchChange}
                    />
                </View>
                <TouchableOpacity style={styles.picker}>
                    <Picker
                        selectedValue={this.state.interval}
                        onValueChange={this.handlePickerChange}
                        prompt='Intervalle entre chaque tweet de votre bot'
                    >
                        <Picker.Item label="1 minute" value="60000" />
                        <Picker.Item label="5 minutes" value="300000" />
                        <Picker.Item label="15 minutes" value="900000" />
                        <Picker.Item label="30 minutes" value="1800000" />
                        <Picker.Item label="1 heure" value="3600000" />
                        <Picker.Item label="24 heures" value="86400000" />
                    </Picker>

                </TouchableOpacity>

                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => this.confirmBot()}
                    icon={
                        <Ionicons
                            name={"ios-redo"}
                            size={15}
                            color={"white"} />
                    }
                    title=" Créer votre bot envoi auto"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "blue"
    },
    switchView: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#ececec',
        borderRadius: 10,
        padding: 10,
        margin: 20,
    },
    picker: {
        margin: 20,
        backgroundColor: '#ececec',
        borderRadius: 10,
    }
})