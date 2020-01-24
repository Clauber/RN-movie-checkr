import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import api from '../services/api';
import CarouselList from '../components/carousel-list';
const Main = props => {
  const {navigate} = props.navigation;
  const [popularMovies, setPopularMovies] = useState('');
  const [upcomingMovies, setUpcomingMovies] = useState('');
  const [nowPlaying, setNowPlaying] = useState('');

  useEffect(() => {
    loadPopularMovies();
    loadUpcomingMovies();
    loadNowPlayingMovies();
  }, []);

  const loadPopularMovies = () => {
    generalLoadMovie(`/movie/popular`, setPopularMovies);
  };
  const loadUpcomingMovies = () => {
    generalLoadMovie(`/movie/upcoming`, setUpcomingMovies);
  };
  const loadNowPlayingMovies = () => {
    generalLoadMovie(`/movie/now_playing`, setNowPlaying);
  };
  const generalLoadMovie = (url, stateItem) => {
    api
      .get(url, {
        params: {
          page: 1,
        },
      })
      .then(response => {
        stateItem(response.data.results);
      })
      .catch(error => {
        stateItem(error);
      });
  };

  return (
    <ImageBackground
      source={{uri: 'https://source.unsplash.com/1600x900/?movie'}}
      style={styles.bgImage}>
      <ScrollView style={styles.mainWrapper}>
        <Text style={styles.title}>Welcome to RN - Movie Checkr</Text>
        {Array.isArray(popularMovies) ? (
          <CarouselList
            title="Popular Movies"
            data={popularMovies}
            navigation={navigate}
          />
        ) : null}
        {Array.isArray(upcomingMovies) ? (
          <CarouselList
            title="Upcoming Movies"
            data={upcomingMovies}
            navigation={navigate}
          />
        ) : null}
        {Array.isArray(nowPlaying) ? (
          <CarouselList
            title="Popular Movies"
            data={nowPlaying}
            navigation={navigate}
          />
        ) : null}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    // opacity: 0.6,
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,.3)',
    paddingTop: 25,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'MyriadPro-Regular',
    opacity: 1,
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
  headerShown: false,
  // title: 'Le Main Page',
  // headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
};

export default Main;
