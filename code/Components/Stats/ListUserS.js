import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import {connect} from "react-redux";

class ListUserS extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        userS: []
    }
    loadUserS(){

        if(this.props.userS.length > 0){
            fetch( "url?query="+this.props.userS )
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        userS: [{ id:0,name: "Simon", pseudo: "Simon", avatar: "/img/unamed.jpeg"}, {id:1, name: "Ayoub", pseudo: "Ayoub", avatar: "/img/truc.jpeg"}]
                    });
                })
                .catch(error => console.warn("error", error));

        }
        this.setState({
            userS : [{ id:0,name: "Simon", pseudo: "Simon", avatar: "/img/unamed.jpeg"}, {id:1, name: "Ayoub", pseudo: "Ayoub", avatar: "/img/truc.jpeg"}]
        });
    }

    componentDidMount(){
        this.loadUserS();
    }

    componentDidUpdate(prevProps){
        if(prevProps.userS.length != this.props.userS.length){
            this.setState({userS: []});
            this.loadUserS();
        }
    }

    render(){
        return(
            <ScrollView>
                {
                    this.state.userS.map((user, index) => (
                        <ListItem
                            key={index}
                            leftAvatar={{ source: { uri: user.avatar } }}
                            title={
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    <Text style={{marginRight: 5}}>{user.name}</Text>
                                </View>
                            }
                            subtitle={"@"+user.pseudo}
                            bottomDivider
                            subtitleStyle={{ color: "blue" }}
                            chevron={{ color: "blue" }}
                            onPress={() => {
                                this.props.navigation.navigate("SingleUser", {user: user});
                            }}
                        />
                    ))
                }
            </ScrollView>
        );
    }

}

function mapStateToProps(state){
    return {userS : state.userS};
}
export default connect(mapStateToProps)(ListUserS);