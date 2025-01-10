import React from 'react';
import { TextInput } from 'react-native';

const FormField = ({ props }) => {
  return (
      <TextInput
        placeholder={props.placeholder}
        style={props.style}
        onChange={(event) => props.handleFormValueChange(props.formKey, event.nativeEvent.text)}
        {...props.textInputProps}
      />
  )
}

export default FormField;
