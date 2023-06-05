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

const Signup_Username = ({ navigation, route }) => {
  const { email } = route.params;
  const [username, setusername] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUsername = () => {
    if (username == "") {
      alert("Please enter username");
    } else {
      setLoading(true);
      fetch("http://10.0.2.2:3000/setusername", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Username Available") {
            setLoading(false);
            alert("Username has been set successfully");
            navigation.navigate("Signup_Password", {
              email: email,
              username: username,
            });
          } else {
            setLoading(false);
            alert("Username not available");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // navigation.navigate('Signup_Password')
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
      <Text style={formHead2}>Choose a Username</Text>
      <TextInput
        placeholder="Enter a Username"
        style={formInput}
        onChangeText={(text) => setusername(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Text style={formButton} onPress={() => handleUsername()}>
          Next
        </Text>
      )}
    </View>
  );
};

export default Signup_Username;

const styles = StyleSheet.create({});
