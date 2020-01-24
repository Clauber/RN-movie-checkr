import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  carouselWrapper: {
    backgroundColor: 'rgba(255,255,255,.7)',
    marginHorizontal: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
  },
  carouselTitle: {
    fontSize: 25,
    textAlign: 'center',
  },
  carousel: {
    backgroundColor: 'blue',
  },
  carouselView: {
    width: 140,
    height: 250,
    paddingVertical: 10,
  },
  textCarousel: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 15,
    fontFamily: 'MyriadPro-Bold',
  },
  imageCarousel: {
    width: 120,
    height: 180,
    marginHorizontal: 10,
  },
});

export default style;
