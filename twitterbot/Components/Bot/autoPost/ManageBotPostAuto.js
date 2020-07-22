import React from "react";
import { StyleSheet, View, TouchableHighlight, ActivityIndicator } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import {postTwitt} from "../../../Twitter_api";

export default class ManageBotPostAuto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            botId: this.props.route.params.bot.botId,
            type: this.props.route.params.bot.type,
            botName: this.props.route.params.bot.botName,
            tweet: this.props.route.params.bot.tweet,
            displayTime: this.props.route.params.bot.displayTime,
            time: parseInt(this.props.route.params.bot.time),
            intervalId: ""
        };
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }



    startBot() {

        this.sendTweet();
        let intervalId = setInterval(() => this.sendTweet(), this.state.time);
        this.setState({ intervalId: intervalId });
    }

    stopBot() {
        clearInterval(this.state.intervalId);

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

        postTwitt(this.state.botId, tweet);

    }


    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.centeredView}>
                        <View>
                            <Text h4 >Bot lancé !</Text>
                            <TouchableHighlight
                                style={{ ...styles.stopButton }}
                                onPress={() => {
                                    this.stopBot();
                                }}
                            >
                                <Text style={styles.textStyle}>STOP</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                <Text h2>{this.state.botName}</Text>

                <View style={styles.paramsContainer}>
                    <Ionicons
                        name={"ios-hourglass"}
                        size={35}
                        color={"blue"} />
                    <Text h4>  {this.state.time}</Text>
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
})