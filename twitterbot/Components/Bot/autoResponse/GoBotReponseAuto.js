import React from "react";
import { StyleSheet, View, Alert, Modal, TouchableHighlight, ActivityIndicator } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import twitter from "react-native-simple-twitter";

export default class GoBotPostAuto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            type: this.props.route.params.bot.type,
            botName: this.props.route.params.bot.botName,
            reponses: this.props.route.params.bot.reponses
        };
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    startBot() {
        this.setModalVisible(true);
        // twitter.api("GET", "statuses/mentions_timeline.json", { user_id: 1300498070 })
        //     .then(response => response)
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => console.warn("error", error));
    }

    stopBot(modalVisible) {
        this.setModalVisible(!modalVisible);
    }

    render() {
        const { modalVisible } = this.state;

        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text h4 style={styles.modalText}>Bot wworking</Text>
                            <TouchableHighlight
                                style={{ ...styles.stopButton }}
                                onPress={() => {
                                    this.stopBot(modalVisible)
                                }}
                            >
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <Text h2>{this.state.botName}</Text>

                <View style={styles.dictionnaire}>
                    <Text style={styles.inputDico}>{this.state.reponses[0].mot}</Text>
                    <Ionicons
                        name={"ios-arrow-forward"}
                        size={35}
                        color={"black"} />
                    <Text style={styles.inputDico}>{this.state.reponses[0].reponse}</Text>
                </View>

                <View style={styles.dictionnaire}>
                    <Text style={styles.inputDico}>{this.state.reponses[1].mot}</Text>
                    <Ionicons
                        name={"ios-arrow-forward"}
                        size={35}
                        color={"black"} />
                    <Text style={styles.inputDico}>{this.state.reponses[1].reponse}</Text>
                </View>

                <View style={styles.dictionnaire}>
                    <Text style={styles.inputDico}>{this.state.reponses[2].mot}</Text>
                    <Ionicons
                        name={"ios-arrow-forward"}
                        size={35}
                        color={"black"} />
                    <Text style={styles.inputDico}>{this.state.reponses[2].reponse}</Text>
                </View>

                <Button
                    buttonStyle={styles.buttons}
                    onPress={() => {
                        this.startBot();
                    }}
                    icon={
                        <Ionicons
                            name={"ios-rocket"}
                            size={15}
                            color={"white"} />
                    }
                    title=" GO"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 30,
    },
    paramsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    center: {
        alignItems: 'center'
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
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 5
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
        backgroundColor: '#ececec',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        flex: 0.5,
    },
    dictionnaire: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})