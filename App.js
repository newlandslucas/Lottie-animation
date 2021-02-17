import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 500,
            height: 600,
            backgroundColor: '#000000',
          }}
          source={require('./rocket.json')}
        />
        <View style={styles.restartButtonContainer}>
          <Button title="Restart Animation" onPress={this.resetAnimation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.0,
  },
  StartAnimation:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    fontSize: 27
  },
  restartButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    fontSize: 27
  },
});

