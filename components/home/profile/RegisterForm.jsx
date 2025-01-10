import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FormField from "../profile/FormField";
import { FormData } from "./FormData";
import { router } from "expo-router";
import { Picker } from '@react-native-picker/picker';

import { COLORS, SIZES } from "../../../constants";

const RegisterForm = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  const [formValues, handleFormValueChange, setFormValues] = FormData({
    role: "",
    experience: ""
  })
  
  const handleSubmit = async () => {
    if (selectedRole === "" || selectedExperience === "") {
      alert("All fields are required");
      return;
    } else {
      router.push("/login");
    }
  };

  return (
    <View>
      <Text style={styles.label}>Role</Text>
      <FormField
        formKey="role"
        placeholder="e.g. Full web developer"
        style={styles.input}
        /*
        autoCapitalize="words"
        autoCorrect={false}
        */
        
        handleFormValueChange={handleFormValueChange}
      />
      
        <Text style={styles.label}>Years of experience</Text>
        <Picker
          selectedValue={selectedExperience}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedExperience(itemValue)
            handleFormValueChange("experience", itemValue)
          }}>
            <Picker.Item label="<1" value="<1" />
            <Picker.Item label="2-3" value="2-3" />
            <Picker.Item label="4-6" value="4-6" />
            <Picker.Item label="7-9" value="7-9" />
            <Picker.Item label="10-15" value="10-15" />
            <Picker.Item label="21-30" value="21-30" />
            <Picker.Item label=">30" value=">30" />
        </Picker>

        <TouchableOpacity style={styles.button} 
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
          
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 13,
    color: '#787878',
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 75,
    color: COLORS.secondary,
    alignContent: "center"
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: SIZES.medium
  },
})

export default RegisterForm;
