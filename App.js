import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Animated,
  PanResponder
} from 'react-native';

export class Itemrow extends Component<> {

  constructor(props) {
    super(props);

    this.state = {
      translateX: new Animated.Value(0)
    }

  }

  componentWillMount(){
    // add pan responder
    this._panResponder = PanResponder.create({
      // Ask to be the responder:

      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        this.state.translateX.setValue(gestureState.dx);
      },

      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded

        if (gestureState.moveX - gestureState.x0 > 100){
          //roll out

          Animated.timing(                  // Animate over time
            this.state.translateX,            // The animated value to drive
            {
              toValue: 400,
              duration: 250,
            }
          ).start(() => this.props.removeItem(this.props.item));

        } else if (gestureState.x0 - gestureState.moveX > 100){
          //roll out

          Animated.timing(                  // Animate over time
            this.state.translateX,            // The animated value to drive
            {
              toValue: -400,
              duration: 250,
            }
          ).start( ()=>this.props.removeItem(this.props.item) );

        } else {
          // return
          Animated.timing(                  // Animate over time
            this.state.translateX,            // The animated value to drive
            {
              toValue: 0,
              duration: 250,
            }
          ).start();
        }
      },

    });

  }

  render() {
    return (
      <Animated.View style={{
        width: '100%', height: 350, backgroundColor: 'lightgrey', position: 'absolute',
      justifyContent: 'flex-start', alignItems: 'center', padding: 20,
        transform: [{ translateX: this.state.translateX }]
      }} {...this._panResponder.panHandlers}>
        <Image source={{ uri: this.props.item.image }} style={{ width: '90%', height: 300, resizeMode: 'cover' }} />
        <Text style={{fontSize: 20}}>{this.props.item.first}</Text>
      </Animated.View>
    );
  }
}

export default class App extends Component<> {

  constructor(props){
    super(props);

    this.state = {
      data: []
    }

  }

  componentDidMount(){
    // fetch data
    this.refreshData();
  }

  refreshData = async () => {

    const response = await this.getData();

    console.log('response', response);

    this.setState({ data: response });

  }

  getData = () => {

    // build payload packet
    var postData = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    return fetch('https://gofuze.io:7717/randomimage?rows=20', postData)
      .then((response) => response.json())
      .then((responseJson) => {

        return responseJson;

      })
      .catch((error) => {

        // console.error(error);

      });

  }

  removeItem = (item) => {
    // remove item from array
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (<Itemrow item={item} removeItem={this.removeItem}/>);
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 20}}/>

        <View style={{width: '100%', height: 400}}>
          <FlatList
            data={this.state.data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            scrollEnabled={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
