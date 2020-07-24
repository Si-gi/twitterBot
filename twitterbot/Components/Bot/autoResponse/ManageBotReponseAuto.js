import React from "react";
import { StyleSheet, View, Alert, Modal, TouchableHighlight, ActivityIndicator } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";


export default class GoBotPostAuto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.route.params.bot.type,
            botName: this.props.route.params.bot.botName,
            response: this.props.route.params.bot.response,
            command: this.props.route.params.bot.word
        };
    }


    render(){

        return (
            <View style={styles.container}>

                <View style={styles.centeredView}>
                    <Text h4 style={styles.modalText}>Bot wworking</Text>
                </View>

                <Text h2>{this.state.botName}</Text>

                <View style={styles.dictionnaire}>
                    <Text style={styles.inputDico}>{this.state.command} will get</Text>

                    <Text style={styles.inputDico}>{this.state.response}</Text>
                </View>


                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => {
                        this.startBot();
                    }}
                    title=" Start"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 30,
    },
    paramsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    center: {
        alignItems: "center"
    },
    buttons: {
        backgroundColor: "blue"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    stopButton: {
        backgroundColor: "red",
        borderRadius: 20,
        marginTop: 15,
        padding: 15,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
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
        alignItems: "center",
    },
});