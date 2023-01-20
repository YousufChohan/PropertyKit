import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import logo from "../../../../assets/logo.png";
import { NavigationContainer } from "@react-navigation/native";
import { containerFull, hr80, logo1 } from "../../../commoncss/PageCSS";
import {
  formButton,
  formHead,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from "../../../commoncss/FormCSS";

const Login = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>Login</Text>
      <TextInput placeholder="Enter your Email" style={formInput} />
      <TextInput
        placeholder="Enter your Password"
        style={formInput}
        secureTextEntry={true}
      />
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate("ForgotPassword_Email")}
      >
        Forgot Password?
      </Text>
      <Text style={formButton} onPress={() => navigation.navigate("MainPage")}>
        Submit
      </Text>

      <View style={hr80}></View>

      <Text style={formTextLinkCenter}>
        Do not have an account?{" "}
        <Text
          style={{ fontWeight: "bold", color: "black" }}
          onPress={() => navigation.navigate("Signup_Email")}
        >
          Sign-up
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
