import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

let Main = props => {
  const [movie, setMovie] = useState('');

  useEffect(() => {
    setMovie(props.navigation.getParam('movie', ''));
  }, []);
  return (
    <ImageBackground
      source={{uri: 'https://source.unsplash.com/1600x900/?movie'}}
      style={styles.bgImage}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`,
          }}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text>{movie.overview}</Text>
      </View>
    </ImageBackground>
  );
};

const win = Dimensions.get('window');
const ratio = win.width / 780;
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    // opacity: 0.6,
  },
  image: {
    paddingHorizontal: 15,
    width: win.width - win.width * 0.2,
    height: 439 * ratio,
    borderRadius: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'MyriadPro-Bold',
  },
});
// Main.navigationOptions = {
//   title: 'da dasdasd',
// };

export default Main;
