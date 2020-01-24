import React, {useState, useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './carousel-list.style';
const CarouselList = props => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        delayPressIn={45}
        onPress={() => {
          props.navigation('Movie', {movie: item});
        }}
        // activeOpacity={1}
        style={styles.carouselView}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.imageCarousel}
        />
        <Text style={styles.textCarousel}>{item.original_title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.carouselWrapper}>
      <Text style={styles.carouselTitle}>{props.title}</Text>
      <Carousel
        layout={'default'}
        data={props.data}
        itemWidth={150}
        sliderWidth={350}
        style={styles.carousel}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CarouselList;
