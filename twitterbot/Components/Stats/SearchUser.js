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

    searchUser(){
        if(this.state.searchQuery.length > 0){
    
            fetch("url.json.query="+  this.state.searchQuery, { })
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
            this.setState({users: [{id:0 , name:"RandomUser", pseudo:"NotRandm",avatar: "/img/unamed.jpeg"}]});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <SearchBar
                    onChangeText={(text) => 
                    {
                        this.setState({searchQuery: text}, this.searchUser);
                    }
                    }
                    value={this.state.searchQuery}
                    placeholder="@User"
                />
                <ScrollView style={styles.usersScroll}>
                    {
                        this.state.users.map((user, index) => (
                            <ListItem
                                key={index}
                                leftAvatar={{ source: { uri: user.avatar } }}
                                title={
                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{marginRight: 5}}>{user.name}</Text>
                                        <Icon
                                            iconStyle={{display: "flex" }}
                                            type="octicon"
                                            name="verified"
                                            color="#00acee"
                                            size={13}
                                        />
                                    </View>
                                }
                                subtitle={"@"+user.pseudo}
                                bottomDivider
                                subtitleStyle={{ color: "blue" }}
                                onPress={() => {this.props.navigation.navigate("SingleUser", {user: user});}}
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