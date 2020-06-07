import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";

export default class Search extends React.Component {

    state = {
        results: [],
        searchQuery: "",
        isLoading: false
    }
//bawega1638@qortu.com
    Alpugues47
    _search() {
        if (this.state.searchQuery.length > 0) {
            this.setState({ isLoading: true });

            fetch("https://api.twitter.com/1.1/users/search.json?q=" + this.state.searchQuery)
                .then(response => response.json())
                .then(data => {
                    this.setState(
                        {
                            results: data.results
                        }
                    );
                    this.setState({ isLoading: false });
                })
                .catch(error => console.warn(error));
        }
        else {
            this.setState({ isLoading: false });
            this.setState({ results: [] });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={(text) => {
                        this.setState({ searchQuery: text }, this._search);
                    }
                    }
                    value={this.state.searchQuery}
                    placeholder="Rechercher..."
                    autoCapitalize="none"
                    showLoading={this.state.isLoading}
                    onClear={() => { this.setState({ results: [] }) }}
                />
                <ScrollView style={styles.resultsScroll}>
                    {
                        this.state.results.map((result, index) => (
                            <ListItem
                                key={index}
                                leftAvatar={{ source: { uri: result.artworkUrl100 } }}
                                title={result.artistName}
                                subtitle={result.trackName}
                                bottomDivider
                                subtitleStyle={{ color: "tomato" }}
                                onPress={() => { this.props.navigation.navigate('Result', { id: result.trackId }) }}
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
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        borderBottomColor: "#FFF",
    },
    resultsScroll: {
        flex: 1,
        backgroundColor: "#fff"
    }
});