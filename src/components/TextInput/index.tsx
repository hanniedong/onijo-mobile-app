import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomText from '../Text/CustomText';
import { COLORS, UTILITY} from '../../common';
import textStyles from '../../common/styles/typography';

type InputType = {
  error?: boolean,
  password?: boolean,
  onChangeText: (value: string) => void,
  placeholder?: string,
  label?: string,
  editable?: boolean,
  autoCorrect?: boolean,
  autoCapitalize?: "words" | "none" | "sentences" | "characters" | undefined
  value: string,
  multiline?: boolean,
  onSubmitEditing?: () => void
  Icon?: React.FC
  loading?: boolean
  autoFocus?: boolean
  EndIcon?: React.FC,
  endIconOnPress?: () => void
}
const Input: React.FC<InputType> = ({
  error,
  password,
  onChangeText,
  placeholder,
  label,
  editable,
  autoCorrect,
  onSubmitEditing,
  multiline,
  value,
  Icon,
  autoCapitalize,
  loading = false,
  autoFocus = true,
  EndIcon,
  endIconOnPress
}) => {
  const [visibility, setVisibility] = useState(false)
  const [active, setActive] = useState(false)
  const secureTextEntry = password && !visibility;
  const inputContainerStyle = [
    styles.inputContainer,
    active ? styles.activeTextField : styles.inactiveTextField,
    error && styles.errorTextField,
    !editable && styles.disabledContainer,
    multiline && styles.textField
  ];

  const labelStyle = [styles.label, error && styles.errorLabel];

  return (
    <View style={styles.container}>
      { label && <CustomText bold style={labelStyle}>{label}</CustomText>}
      <View style={inputContainerStyle}>
        {Icon && <View style={{ alignSelf: 'center' }}>
          <Icon />
        </View>}
        <TextInput
          autoFocus={autoFocus}
          style={[styles.input, !editable && styles.disabled, active && styles.activeTextField]}
          onFocus={() => {
            setActive(true)
          }}
          onBlur={() => {
            setActive(false)
          }}
          value={value}
          onChangeText={(value) =>
            onChangeText(value)
          }
          placeholder={placeholder}
          placeholderTextColor={COLORS.SECONDARY[4]}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
        />
        {EndIcon && <TouchableOpacity containerStyle={{ alignSelf: 'center' }} onPress={endIconOnPress}>
          <EndIcon />
        </TouchableOpacity>}
        {loading && (
          <View style={styles.iconContainer}>
            <ActivityIndicator />
          </View>
        )}
      </View>
      <View style={styles.errorContainer}>
        {error && <Text style={styles.errorMessage}>{error}</Text>}
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  inputContainer: {
    borderWidth: 1.5,
    height: 54,
    backgroundColor:COLORS.WHITE,
    borderRadius: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  errorTextField: {
    borderColor: UTILITY[0],
    borderBottomColor: UTILITY[0],
  },
  inactiveTextField: {
    borderColor: COLORS.SECONDARY[4],
  },
  activeTextField: {
    borderColor: COLORS.PRIMARY[0],
  },
  textField: {
    height: 180,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    ...textStyles.body1,
  },
  disabled: {
    color: COLORS.GRAYSCALE[7],
  },
  disabledContainer: {
    backgroundColor: COLORS.GRAYSCALE[6],
  },
  label: {
    paddingBottom: 5,
  },
  errorLabel: {
    color: UTILITY[0],
  },
  errorMessage: {
    paddingLeft: 15,
    marginTop: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 10,
  },
  errorContainer: {
    height: 25,
  },
});