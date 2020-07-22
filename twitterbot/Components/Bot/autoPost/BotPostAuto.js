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
            botId: "",
            botName: "",
            tweet: "",
            time: ""
        };
    }


    handleBotNameChange = botName => {
        this.setState({ botName });
    }

    handlePickerChange = time => {
        this.setState({ time });
    }

    handleSwitchChange = displayTime => {
        this.setState({ displayTime });
    }

    handleTweetChange = tweet => {
        this.setState({ tweet });
    }
    handleBotId = botId => {
        this.setState({botId})
    }

    render() {
        return (
            <View>
                <Text h2>Bot</Text>

                <TextInput placeholder="Nom de votre bot" value={this.state.botName} onChangeText={this.handleBotNameChange} style={styles.input} />
                <TextInput placeholder="Son identifiant" value={this.state.botId} onChangeText={this.handleBotId} style={styles.input} />
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
                        selectedValue={this.state.time}
                        onValueChange={this.handlePickerChange}
                        prompt='timele entre chaque tweet de votre bot'
                    >
                        <Picker.Item label="15 minutes" value="900000" />
                        <Picker.Item label="30 minutes" value="1800000" />
                        <Picker.Item label="1 heure" value="3600000" />
                        <Picker.Item label="13h12" value="56160000" />
                        <Picker.Item label="24 heures" value="86400000" />
                    </Picker>

                </TouchableOpacity>

                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => this.props.route.params.addBot(this.state)}
                    icon={  z
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