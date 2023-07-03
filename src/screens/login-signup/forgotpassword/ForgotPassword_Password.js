import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ActivityIndicator,
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
const ForgotPassword_Password = ({ navigation, route }) => {
  const { email } = route.params;
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = () => {
    if (password == "" || confirmpassword == "") {
      alert("Please enter password");
    } else if (password != confirmpassword) {
      alert("Passwords do not match");
    } else {
      setLoading(true);
      fetch("http://192.168.43.73:3000/resetpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Password Change") {
            setLoading(false);
            alert(data.message);
            navigation.navigate("ForgotPassword_AccountRecovered");
          } else {
            setLoading(false);
            alert("Something went wrong");
          }
        })
        .catch((err) => {
          setLoading(false);
          alert(err);
        });
    }

    // navigation.navigate('ForgotPassword_AccountRecovered')
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
      <Text style={formHead2}>Choose a new password</Text>
      <TextInput
        placeholder="Enter password"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setpassword(text)}
      />
      <TextInput
        placeholder="Confirm password"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setconfirmpassword(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Text style={formButton} onPress={() => handlePasswordChange()}>
          Next
        </Text>
      )}
    </View>
  );
};

export default ForgotPassword_Password;

const styles = StyleSheet.create({});
