import React from 'react';
import {View, Text} from 'react-native';

let Another = props => {
  return (
    <View>
      <Text>notha Page!!!!!</Text>
    </View>
  );
};

Another.navigationOptions = {
  title: 'da dasdasd',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Another;
