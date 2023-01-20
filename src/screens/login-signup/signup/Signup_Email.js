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
import { formButton, formHead2, formInput } from "../../../commoncss/FormCSS";
const Signup_Email = ({ navigation }) => {
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
      <Text style={formHead2}>Create a new account</Text>
      <TextInput placeholder="Enter Your Email" style={formInput} />
      <Text
        style={formButton}
        onPress={() => navigation.navigate("Signup_Verify")}
      >
        Next
      </Text>
    </View>
  );
};

export default Signup_Email;

const styles = StyleSheet.create({});
