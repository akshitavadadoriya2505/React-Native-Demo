import {Dimensions, PixelRatio, Platform} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const isIOS = Platform.OS === 'ios';
const isANDROID = Platform.OS === 'android';
const isiPAD = screenHeight / screenWidth < 1.6;

const widthPercentageToDP = (wp) => {
  const widthPercent = wp;
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (hp) => {
  const heightPercent = hp;
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// based on iphone 5s's scale
const scale = screenWidth / 375;
const normalize = (size) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const boxShadow = {
  shadowOffset: {width: 0, height: 1},
  shadowColor: '#000000',
  shadowOpacity: 0.3,
  elevation: 2,
  shadowRadius: 2,
};

const light = {
  foreground: '#000000',
  background: '#eeeeee',
};

const dark = {
  foreground: '#ffffff',
  background: '#222222',
};

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  screenHeight,
  screenWidth,
  normalize,
  isIOS,
  isANDROID,
  isiPAD,
  light,
  dark,
  boxShadow,
};
