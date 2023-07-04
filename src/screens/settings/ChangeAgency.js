import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { containerFull, goback, logo1 } from "../../commoncss/PageCSS";
import logo from "../../../assets/logo.png";
import { formButton, formHead2, formInput } from "../../commoncss/FormCSS";
import { color } from "../../commoncss/color";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangeAgency = ({ navigation }) => {
  const [agency, setAgency] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAgency = () => {
    if (agency === "") {
      alert("Please enter the agency name");
    } else {
      setLoading(true);
      AsyncStorage.getItem("user")
        .then((data) => {
          const email = JSON.parse(data).user.email;
          const requestData = {
            email: email,
            agency: agency,
          };

          fetch(color.ipAddress + "/setagency", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "A") {
                setLoading(false);
                alert("Agency has been set successfully");
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
      <Text style={formHead2}>Change Agency</Text>
      <TextInput
        placeholder="Enter new agency"
        style={formInput}
        onChangeText={(text) => setAgency(text)}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={formButton} onPress={() => handleAgency()}>
          Save
        </Text>
      )}
    </View>
  );
};

export default ChangeAgency;

const styles = StyleSheet.create({});
