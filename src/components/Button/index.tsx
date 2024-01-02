import React, { VFC } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "../Text/CustomText";
import { COLORS, SPACING } from "../../common";

type ButtonType = {
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  title: string;
  style?: object;
  inverted?: boolean;
};

const Button: VFC<ButtonType> = ({
  loading = false,
  disabled = false,
  onPress = () => {},
  title = "",
  style = {},
  inverted = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        loading && styles.loading,
        style,
        inverted && styles.inverted,
        disabled && styles.disabled,
      ]}
      accessibilityLabel="Learn more about this purple button"
      onPress={onPress}
      disabled={disabled}
    >
      {title && !loading && (
        <CustomText
          allCaps1
          style={[styles.text, inverted && styles.invertedText]}
        >
          {title}
        </CustomText>
      )}
      {/* {loading && <ActivityIndicatorView />} */}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY[0],
    height: 52,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    marginVertical: SPACING[2]
  },
  loading: { backgroundColor: COLORS.GRAYSCALE[0] },
  text: { color: COLORS.WHITE, textAlign: "center" },
  icon: { paddingRight: SPACING[6] },
  inverted: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderColor: COLORS.PRIMARY[0],
    borderWidth: 2,
  },
  disabled: { backgroundColor: COLORS.DISABLED },
  invertedText: { color: COLORS.PRIMARY[0] },
});
