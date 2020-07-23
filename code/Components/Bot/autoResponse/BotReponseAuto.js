import React from "react";
import { StyleSheet, View, TextInput, Picker, TouchableOpacity, Switch, Alert, FlatList } from "react-native";
import { Text, Button } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";


export default class BotPostAuto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "reponse",
            botName: "",
            reponses:  "" 
        };
    }

    handleBotNameChange = botName => {
        this.setState({ botName });
    }

    handleMotChange = (mot, index) => {
        this.setState(prevState => ({
            reponses: prevState.reponses.map(
                obj => (obj.id === index ? Object.assign(obj, { mot: mot }) : obj)
            )
        }));
    }

    handleReponseChange = (reponse, index) => {
        this.setState(prevState => ({
            reponses: prevState.reponses.map(
                obj => (obj.id === index ? Object.assign(obj, { reponse: reponse }) : obj)
            )
        }));
    }

    render() {
        return (
            <View>
                <Text h2>Bot</Text>

                <TextInput placeholder="Nom de votre bot" value={this.state.botName} onChangeText={this.handleBotNameChange} style={styles.input} />

                <View style={styles.dictionnaire}>
                    <TextInput placeholder="Mot déclencheur" style={styles.inputDico} value={this.state.reponses[0].mot} onChangeText={(mot) => this.handleMotChange(mot, 0)} />
                    <TextInput placeholder="Réponse" style={styles.inputDico} value={this.state.reponses[0].reponse} onChangeText={(mot) => this.handleReponseChange(mot, 0)} />
                </View>

                <Button
                    color = "blue"
                    onPress={() => this.props.route.params.addBot(this.state)}
                    icon={
                        <Ionicons
                            name={"ios-redo"}
                            size={15}
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