import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FC7F32',
  secondary: '#FC6101',
  white: '#FFFFFF',
  black: '#000000',
  black2: '#1A1A1A',
  black3: '#333333',
  orange: '#FD960B',
  orange2: '#FE7A1D',
  orange3: '#FCB300',
  orange4: '#FD8E10',

  gray: '#999999',
  gray2: '#A2A2A2',
  gray3: '#777777',
  green: '#0D7739',
  red: '#ED2330',
  blue1: '#02A5FE',
  blue:'#567cd6'
};

export const SIZES = {
  width,
  height,
  base: 8,
  baseX2: 12,
  baseX3: 14,
  baseX4: 16,
  baseX5: 24,
  radius: 6,
};

export const FONTS = {
  bold: {fontFamily: 'Rubik-Bold', fontSize: SIZES.baseX2, lineHeight: 22},
  semiBold: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: SIZES.baseX4,
    lineHeight: 22,
  },
  extraBold: {
    fontFamily: 'Rubik-ExtraBold',
    fontSize: SIZES.baseX5,
    lineHeight: 22,
  },
  medium: {
    fontFamily: 'Rubik-Medium',
    fontSize: SIZES.baseX2,
    lineHeight: 18,
  },
  regular: {
    fontFamily: 'Rubik-Regular',
    fontSize: SIZES.baseX2,
    lineHeight: 15,
  },
  light: {
    fontFamily: 'Rubik-Light',
    fontSize: SIZES.baseX2,
    lineHeight: 15,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
