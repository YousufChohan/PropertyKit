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
  formbtn,
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
const ChangeCity = ({ navigation }) => {
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);

  const handleagency = () => {
    if (city == "") {
      alert("Please enter Agency Name");
    } else {
      setLoading(true);
      AsyncStorage.getItem("user")
        .then((data) => {
          fetch("http://10.0.2.2:3000/setcity", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: JSON.parse(data).user.email,
              city: city,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "City Updated") {
                setLoading(false);
                alert("city has been set successfully");
                navigation.navigate("Settings1");
              } else if (data.error === "Invalid Credentials") {
                alert("Invalid Credentials");
                setLoading(false);
                navigation.navigate("Login");
              } else {
                setLoading(false);
                alert("Please Try Again");
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

    // navigation.navigate('Signup_ChoosePassword')
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
      <Text style={formHead2}>Change your City</Text>
      <TextInput
        placeholder="Enter new city"
        style={formInput}
        onChangeText={(text) => setCity(text)}
        multiline={true}
        numberOfLines={5}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={formButton} onPress={() => handleagency()}>
          Save
        </Text>
      )}
    </View>
  );
};

export default ChangeAgency;

const styles = StyleSheet.create({});
