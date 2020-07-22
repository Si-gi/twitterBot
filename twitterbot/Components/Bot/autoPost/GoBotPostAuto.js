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
            tweet: this.props.route.params.bot.tweet,
            displayTime: this.props.route.params.bot.displayTime,
            interval: parseInt(this.props.route.params.bot.interval),
            intervalId: ""
        };
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    startBot() {
        this.setModalVisible(true);
        this.sendTweet();
        let intervalId = setInterval(() => this.sendTweet(), this.state.interval);
        this.setState({ intervalId: intervalId });
    }

    stopBot(modalVisible) {
        clearInterval(this.state.intervalId);
        this.setModalVisible(!modalVisible);
    }

    sendTweet() {

        let tweet = "";
        if (this.state.displayTime) {
            let date = new Date();
            let hours = this.get2D(date.getHours());
            let minutes = this.get2D(date.getMinutes());
            let seconds = this.get2D(date.getSeconds());
            tweet += "[" + hours + ":" + minutes + ":" + seconds + "] ";
        }


        tweet += this.state.tweet;

        twitter.requst("POST", "url", tweet);

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
                            <Text h4 style={styles.modalText}>Bot lancé !</Text>
                            <TouchableHighlight
                                style={{ ...styles.stopButton }}
                                onPress={() => {
                                    this.stopBot(modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>STOP</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>


                <Text h2>{this.state.botName}</Text>

                <View style={styles.paramsContainer}>
                    <Ionicons
                        name={"ios-hourglass"}
                        size={35}
                        color={"blue"} />
                    <Text h4>  {this.state.interval}</Text>
                </View>

                {this.state.displayTime &&
                    <View style={styles.paramsContainer}>
                        <Ionicons
                            name={"ios-clock"}
                            size={35}
                            color={"blue"} />
                        <Text h4>  OUI</Text>
                    </View>
                }

                <View style={styles.center}>
                    <Ionicons
                        name={"ios-text"}
                        size={35}
                        color={"blue"} />
                    <Text h4>{this.state.tweet}</Text>
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
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
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
})