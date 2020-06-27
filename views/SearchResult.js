import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SearchFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //q: this.props.params.q ?? 'nothing',
      //count: this.props.params.count ?? 10,
      tweets: [],
    };
  }

  async componentDidMount() {
    const { q, count } = this.state;
    const url = 'https://api.twitter.com/1.1/search/tweets.json';
    const params = new URLSearchParams();
    params.append('q', q);
    params.append('count', count);
    try {
      let response = await fetch(`${url}?${params}`, {
        headers: {
          Authorization: 'bearer YOUR_BEARER_TOKEN',
        },
      });
      response = await response.json();
      this.setState({ tweets: response.statuses });
    } catch (err) {
      console.log('err', err);
    }
  }

  renderTweets() {
    const { tweets } = this.state;
    if (tweets && tweets.length) {
      return tweets.map((tweet, i) => (<View key={i} style={{ margin: 5 }}>
          <Text style={{ fontSize: 16 }}>{ tweet.text }</Text></View>));
    }
  }


  render() {
    console.log(this.props.route);
    console.log(this.props.route.params);
    const { film } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text>Display Twitter Search Results
          {film.q}
        </Text>
        <View style={{ margin: 20 }}>
          { this.renderTweets() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
