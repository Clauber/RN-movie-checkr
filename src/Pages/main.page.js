import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Movie from './movie.page';
const Main = props => {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <Text>The Main Page!</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.fakeButton}
          onPress={() => {
            props.navigation.push('Movie');
          }}>
          <Text style={styles.text}>Navigate!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  fakeButton: {
    // marginBottom: 36
    margin: 10,
    borderRadius: 20,
    overlayColor: 'blue',
    backgroundColor: 'green',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 30,
  },
});

Main.navigationOptions = {
  // headerShown: false,
  title: 'Le Main Page',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Main;
