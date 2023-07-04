import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { containerFull, goback, logo1 } from "../../../commoncss/PageCSS";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../../assets/logo.png";
import {
  formButton,
  formHead2,
  formHead3,
  formInput,
} from "../../../commoncss/FormCSS";
const Signup_Verify = ({ navigation, route }) => {
  const { useremail, userVerificationCode } = route.params;
  console.log(useremail, userVerificationCode);

  const [verificationCode, setVerificationCode] = useState("");

  const handleVerificationCode = () => {
    if (verificationCode != userVerificationCode) {
      alert("Invalid Verification Code");
    } else if (verificationCode == userVerificationCode) {
      alert("Verification Code Matched!");
      navigation.navigate("Signup_Username", { email: useremail });
    } else {
      alert("Please Try Again");
    }
  };
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
      <Text style={formHead3}>
        Verification code has been sent to your Email
      </Text>
      <TextInput
        placeholder="Enter 6-digit code here"
        style={formInput}
        onChangeText={(text) => setVerificationCode(text)}
      />
      <Text style={formButton} onPress={() => handleVerificationCode()}>
        Next
      </Text>
    </View>
  );
};

export default Signup_Verify;

const styles = StyleSheet.create({});
