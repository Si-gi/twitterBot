import React from "react";
import {connect} from "react-redux";
import {StyleSheet, ScrollView, View, ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import { Image, Text, Icon  } from "react-native-elements";
import { getTweetsFromUser } from "../../Twitter_api";


class SingleUser extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        tweets : [],
        infavorites: false
    }

    componentDidMount(){
        getTweetsFromUser(this.props.route.params.user.id).then(data => {
            this.setState({tweets: data});
        });
        if(this.props.favoritesUsers.includes(this.props.route.params.user.pseudo)){
            this.setState({infavorites: true});
        }
    }

    toggleFavorite(){
        if(this.state.infavorites){
            const action = {type: "REMOVE_USER", value: this.props.route.params.user.screen_name};
            this.props.dispatch(action);
            this.setState({infavorites: false});
        }
        else {
            const action = {type: "ADD_USER", value: this.props.route.params.user.screen_name};
            this.props.dispatch(action);
            this.setState({infavorites: true});
        }
    }

    render(){
        const user = this.props.route.params.user;
        const profilImage = user.avatar;
        this.props.navigation.setOptions(
            { 
                title: user.name,
                headerRight: () => (
                    <TouchableOpacity 
                        style={{marginRight: 10}}
                        onPress={() => 
                        {
                            this.props.navigation.navigate("AddUser");
                        }
                        }
                    >
                        <Icon
                            name='star'
                            type='font-awesome'
                            size={20}
                            color="yellow"
                            onPress={() => this.toggleFavorite()}
                        />
                    </TouchableOpacity>
                )
            }
        );
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: profilImage }}
                        style={styles.userImage}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View>
                        <Text h4 style={{fontWeight: "bold"}}>{user.name}</Text>
                        <Text h5>@{user.pseudo}</Text>
                    </View>
                </View>
                <ScrollView style={{paddingTop: 17, paddingLeft: 12, paddingRight: 12}}>
                    <View style={styles.statItem}>
                        <View style={styles.iconContainer}>
                            <Icon
                                size={15} 
                                type="font-awesome"
                                name="calendar-times-o"
                                color="blue"
                            />
                        </View>
                    </View>
                    <View style={styles.statItem}>F
                        <View style={styles.iconContainer}>
                            <Icon
                                size={15} 
                                type="font-awesome"
                                name="sc-twitter"
                                color="blue"
                            />
                        </View>
                        <View style={{marginLeft: 17}}>
                            <Text style={{fontSize: 17, fontWeight: "bold", marginBottom: 6}}>Oisillonement</Text>
                            <Text>{user.statuses_count}</Text>
                        </View>
                    </View>
                    <View style={styles.statItem}>
                        <View style={styles.iconContainer}>
                            <Icon
                                size={15} 
                                type="font-awesome"
                                name="users"
                                color="blue"
                            />
                        </View>
                        <View style={{marginLeft: 17}}>
                            <Text style={{fontSize: 17, fontWeight: "bold", marginBottom: 6}}>Acolyte des Illustres</Text>
                            <Text>{user.followers_count}</Text>
                        </View>
                    </View>
                    <View style={styles.statItem}>
                        <View style={styles.iconContainer}>
                            <Icon
                                size={15} 
                                type="font-awesome-5"
                                name="user-follow"
                                color="blue"
                            />
                        </View>
                        <View style={{marginLeft: 17}}>
                            <Text style={{fontSize: 17, fontWeight: "bold", marginBottom: 6}}>Abonnements</Text>
                            <Text>{user.followers_count}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECEFF1"
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        flexDirection: "row"
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginRight: 20
    },
    mapStyle: {
        flex: 0.25,
        width: Dimensions.get("window").width
    },
    statItem: {
        margin: 10,
        padding: 15,
        minHeight: 70,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,
        borderRadius: 6
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderColor: "blue",
        borderWidth: 1.5,
        borderRadius:  30
    }
});

function mapStateToProps(state){
    return {favoritesUsers : state.users};
}
export default connect(mapStateToProps)(SingleUser);