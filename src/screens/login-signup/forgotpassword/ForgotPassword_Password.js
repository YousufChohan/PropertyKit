import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { containerFull, goback, logo1 } from "../../../commoncss/PageCSS";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../../assets/logo.png";
import {
  formButton,
  formHead2,
  formHead3,
  formInput,
} from "../../../commoncss/FormCSS";
const ForgotPassword_Password = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text
          style={{
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
            marginHorizontal: 5,
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>

      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Choose a new password</Text>
      <TextInput
        placeholder="Enter password"
        style={formInput}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm password"
        style={formInput}
        secureTextEntry
      />
      <Text
        style={formButton}
        onPress={() => navigation.navigate("ForgotPassword_AccountRecovered")}
      >
        Next
      </Text>
    </View>
  );
};

export default ForgotPassword_Password;

const styles = StyleSheet.create({});
