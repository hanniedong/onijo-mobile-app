import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

const linkHighlighted = {
  fontFamily: 'Poppins_500Medium',
  fontSize: 16,
  lineHeight: 24,
};

const link = {
  fontFamily: 'Poppins_500Medium',
  fontSize: 16,
  lineHeight: 24,
};

const linkSmall = {
  fontFamily: 'Poppins_500Medium',
  fontSize: 14,
  lineHeight: 19,
};

const DEFAULT_TYPOGRAPHY_COLOR = COLORS.GRAYSCALE[2];

export default StyleSheet.create({
  title1: {
    fontFamily: 'Poppins_900Black',
    fontSize: 42,
    lineHeight: 63,
    color: COLORS.PRIMARY[0],
  },
  title2: {
    fontFamily: 'Poppins_900Black',
    fontSize: 24,
    lineHeight: 36,
    color: COLORS.BLACK,
  },
  heading1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 28,
    lineHeight: 40,
    color: COLORS.BLACK,
  },
  heading2: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    lineHeight: 24,
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  heading3: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    lineHeight: 16,
    color: DEFAULT_TYPOGRAPHY_COLOR,
    textTransform: 'uppercase',
  },
  heading4: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.BLACK,
  },
  heading5: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.BLACK,
  },
  bold: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.BLACK,
  },
  body1: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 20,
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  body2: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  body3: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.BLACK,
  },
  caption: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  caption2: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.BLACK,
  },
  medium1: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    lineHeight: 22,
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  medium2: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.BLACK,
  },
  medium3: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    lineHeight: 27,
    color: COLORS.BLACK,
  },
  inverse: {
    color: COLORS.WHITE,
  },
  error: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.ERROR,
  },
  allCaps1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  allCaps2: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  smallText1: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    lineHeight: 18,
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  smallText2: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.BLACK,
  },
  extraSmall: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 18,
    color: DEFAULT_TYPOGRAPHY_COLOR,
  },
  link: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: 'underline'
  },
  link2: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: 'underline'
  }
});