import React, { FC } from 'react';
import { LayoutChangeEvent, Text } from 'react-native';
import typography from '../../common/styles/typography';

type CustomTextProps = {
  style?: object;
  title1?: boolean;
  title2?: boolean;
  heading1?: boolean;
  heading2?: boolean;
  heading3?: boolean;
  heading4?: boolean;
  heading5?: boolean;
  body1?: boolean;
  body2?: boolean;
  body3?: boolean;
  caption?: boolean;
  caption2?: boolean;
  medium1?: boolean;
  medium2?: boolean;
  medium3?: boolean;
  allCaps1?: boolean;
  allCaps2?: boolean;
  smallText1?: boolean;
  smallText2?: boolean;
  extraSmall?: boolean;
  link?: boolean;
  link2?: boolean;
  bold?: boolean;
  error?: boolean;
  onPress?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  key?: number;
  inverse?: boolean
  numberOfLines?: number
  children: string;
};

const CustomText: FC<CustomTextProps> = function ({
  style,
  children,
  title1,
  title2,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  body1,
  body2,
  body3,
  caption,
  caption2,
  medium1,
  medium2,
  medium3,
  allCaps1,
  allCaps2,
  smallText1,
  smallText2,
  extraSmall,
  bold,
  link,
  link2,
  error,
  onPress,
  onLayout,
  key,
  inverse,
  numberOfLines,
  ...restProps
}) {
  if (!children) return null;

  return (
    <Text
      key={key}
      numberOfLines={numberOfLines}
      onPress={onPress}
      onLayout={onLayout}
      style={[
        title1 && typography.title1,
        title2 && typography.title2,
        heading1 && typography.heading1,
        heading2 && typography.heading2,
        heading3 && typography.heading3,
        heading4 && typography.heading4,
        heading5 && typography.heading5,
        body1 && typography.body1,
        body2 && typography.body2,
        body3 && typography.body3,
        caption && typography.caption,
        caption2 && typography.caption2,
        medium1 && typography.medium1,
        medium2 && typography.medium2,
        medium3 && typography.medium3,
        inverse && typography.inverse,
        allCaps1 && typography.allCaps1,
        allCaps2 && typography.allCaps2,
        smallText1 && typography.smallText1,
        smallText2 && typography.smallText2,
        extraSmall && typography.extraSmall,
        bold && typography.bold,
        link && typography.link,
        link2 && typography.link2,
        error && typography.error,
        style,
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default CustomText;