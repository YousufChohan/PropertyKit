import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { containerFull, goback, hr80, logo1 } from "../../commoncss/PageCSS";
import logo from "../../../assets/logo.png";
import {
  formButton,
  formHead,
  formHead2,
  formHead3,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from "../../commoncss/FormCSS";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangeUsername = ({ navigation }) => {
  const [username, setusername] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUsername = () => {
    if (username == "") {
      alert("Please enter username");
    } else {
      setLoading(true);
      AsyncStorage.getItem("user")
        .then((data) => {
          fetch("http://10.0.2.2:3000/changeusername", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: JSON.parse(data).user.email,
              username: username,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "Username Updated") {
                setLoading(false);
                alert("Username has been set successfully");
                navigation.navigate("Settings1");
              } else if (data.error === "Invalid Credentials") {
                alert("Invalid Credentials");
                setLoading(false);
                navigation.navigate("Login");
              } else {
                setLoading(false);
                alert("Username not available");
              }
            })
            .catch((err) => {
              alert("Something went wrong");
              setLoading(false);
            });
        })
        .catch((err) => {
          alert("Something went wrong");
          setLoading(false);
        });
    }

    // navigation.navigate('Signup_Password')
  };

  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings1")}
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        <Text
          style={{
            color: "black",
            fontSize: 16,
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>

      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Change Username</Text>
      <TextInput
        placeholder="Enter new username"
        style={formInput}
        onChangeText={(text) => setusername(text)}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={formButton} onPress={() => handleUsername()}>
          Save
        </Text>
      )}
    </View>
  );
};

export default ChangeUsername;

const styles = StyleSheet.create({});
