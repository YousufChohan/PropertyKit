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
import { formButton, formHead2, formInput } from "../../../commoncss/FormCSS";
import { color } from "../../../commoncss/color";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup_Email = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmail = () => {
    // setLoading(true)
    // navigation.navigate('Signup_EnterVerificationCode')
    if (email == "") {
      alert("Please enter email");
    } else {
      setLoading(true);
      fetch("http://10.0.2.2:3000/verify", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error === "User already exsist!!") {
            // alert('Invalid Credentials')
            alert("Invalid Credentials");
            setLoading(false);
          } else if (data.message === "Email Sent") {
            setLoading(false);
            alert(data.message);
            navigation.navigate("Signup_Verify", {
              useremail: data.email,
              userVerificationCode: data.VerificationCode,
            });
          }
        });
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
      <Text style={formHead2}>Create a new account</Text>
      <TextInput
        placeholder="Enter Your Email"
        style={formInput}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Text style={formButton} onPress={() => handleEmail()}>
          Next
        </Text>
      )}
    </View>
  );
};

export default Signup_Email;

const styles = StyleSheet.create({});
