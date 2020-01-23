import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

let Main = props => {
  return (
    <View style={styles.container}>
      <Text>Movie Page!!!!!</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.fakeButton}
          onPress={() => {
            props.navigation.push('Another');
          }}>
          <Text style={styles.text}>Navigsdasdsaate!</Text>
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
// Main.navigationOptions = {
//   title: 'da dasdasd',
// };

export default Main;
