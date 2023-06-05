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
const ChangeDescription = ({ navigation }) => {
  const [description, setdescription] = useState("");

  const [loading, setLoading] = useState(false);

  const handleDescription = () => {
    if (description == "") {
      alert("Please enter Description");
    } else {
      setLoading(true);
      AsyncStorage.getItem("user")
        .then((data) => {
          fetch("http://10.0.2.2:3000/setdescription", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: JSON.parse(data).user.email,
              description: description,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "Description Updated") {
                setLoading(false);
                alert("Description has been set successfully");
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
      <Text style={formHead2}>Change Description</Text>
      <TextInput
        placeholder="Enter new description"
        style={formInput}
        onChangeText={(text) => setdescription(text)}
        multiline={true}
        numberOfLines={5}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={formButton} onPress={() => handleDescription()}>
          Save
        </Text>
      )}
    </View>
  );
};

export default ChangeDescription;

const styles = StyleSheet.create({});
