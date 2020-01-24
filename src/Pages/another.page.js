import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

let Another = props => {
  return (
    <ImageBackground>
      <View>
        <Text>dasdasdasd dasdasdasPage!!!!!</Text>
      </View>
    </ImageBackground>
  );
};

Another.navigationOptions = {
  title: 'da',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Another;
