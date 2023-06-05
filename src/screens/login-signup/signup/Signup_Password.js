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
const Signup_Password = ({ navigation, route }) => {
  const { email, username } = route.params;
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePassword = () => {
    // navigation.navigate('Signup_AccountCreated')
    if (password == "" || confirmpassword == "") {
      alert("Please enter password");
    } else if (password != confirmpassword) {
      alert("Password does not match");
    } else {
      setLoading(true);
      fetch("http://10.0.2.2:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "User Registered!!") {
            setLoading(false);
            alert(data.message);
            navigation.navigate("Signup_AccountCreated");
          } else {
            setLoading(false);
            alert("Please try again");
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
      <Text style={formHead2}>Choose a strong password</Text>
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
      <Text style={formButton} onPress={() => handlePassword()}>
        Next
      </Text>
    </View>
  );
};

export default Signup_Password;

const styles = StyleSheet.create({});
