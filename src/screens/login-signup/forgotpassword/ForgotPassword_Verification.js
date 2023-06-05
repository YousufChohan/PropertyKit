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

const ForgotPassword_Verification = ({ navigation, route }) => {
  const { useremail, userVerificationCode } = route.params;
  console.log(useremail, userVerificationCode);

  const [verificationCode, setVerificationCode] = React.useState("");

  const handleVerificationCode = () => {
    if (verificationCode != userVerificationCode) {
      alert("Invalid Verification Code");
    } else {
      alert("Verification Code Matched");
      navigation.navigate("ForgotPassword_Password", {
        email: useremail,
      });
    }

    // navigation.navigate('ForgotPassword_ChoosePassword')
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
        Verificaion code has been sent to your Email
      </Text>
      <TextInput
        placeholder="Enter 6-Digit Code here"
        style={formInput}
        onChangeText={(text) => setVerificationCode(text)}
      />

      <Text style={formButton} onPress={() => handleVerificationCode()}>
        Next
      </Text>
    </View>
  );
};

export default ForgotPassword_Verification;

const styles = StyleSheet.create({});
