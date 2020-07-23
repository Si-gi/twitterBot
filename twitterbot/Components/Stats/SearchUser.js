import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {connect} from "react-redux";
import { SearchBar, ListItem, Icon } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";

class SearchUser extends React.Component {

    state = {
        users: [],
        searchQuery: "",
    }

    _search(){
        if(this.state.searchQuery.length > 0){
    
            twitter.api("GET", "users/search.json", { q: this.state.searchQuery })
                .then(response => response)
                .then(data => {
                    this.setState(
                        {
                            users: data
                        }
                    );
                })
                .catch(error => console.warn(error));
        }
        else {
            this.setState({users: []});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <SearchBar
                    onChangeText={(text) => 
                    {
                        this.setState({searchQuery: text}, this._search);
                    }
                    }
                    value={this.state.searchQuery}
                    placeholder="@User"
                    onClear={() => {this.setState({users: []});}}
                />
                <ScrollView style={styles.usersScroll}>
                    {
                        this.state.users.map((u, index) => (
                            <ListItem
                                key={index}
                                leftAvatar={{ source: { uri: u.profile_image_url_https } }}
                                title={
                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{marginRight: 5}}>{u.name}</Text>
                                        <Icon
                                            iconStyle={{display: u.verified ? "flex" : "none"}}
                                            type="octicon"
                                            name="verified"
                                            color="#00acee"
                                            size={13}
                                        />
                                    </View>
                                }
                                subtitle={"@"+u.screen_name}
                                bottomDivider
                                subtitleStyle={{ color: "blue" }}
                                onPress={() => {this.props.navigation.navigate("UserSingle", {user: u});}}
                                chevron
                            />
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        flex: 0.2,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        borderBottomColor: "#FFF",
    },
    usersScroll: {
        flex: 1,
        backgroundColor: "#fff"
    }
});

function mapStateToProps(state){
    return {users : state.users};
}
export default connect(mapStateToProps)(SearchUser);