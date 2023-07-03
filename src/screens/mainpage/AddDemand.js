import {
  StyleSheet,
  Text,
  ScrollView,
  View,
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
  formInput,
} from "../../commoncss/FormCSS";
import { MaterialIcons } from "@expo/vector-icons";
import { firebase } from "../../firebase/Config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color } from "../../commoncss/color";

const AddDemand = ({ navigation }) => {
  const [demandDetail, setDemandDetail] = useState("");
  const [demandNum, setDemandNum] = useState("");
  const [demandPrecinct, setDemandPrecinct] = useState("");
  const [demandStreet, setDemandStreet] = useState("");
  const [demandType, setDemandType] = useState("");
  const [demandPrice, setDemandPrice] = useState("");
  const [loading2, setLoading2] = useState(false);

  const handleUpload = () => {
    AsyncStorage.getItem("user").then((data) => {
      setLoading2(true);

      fetch("http://192.168.43.73:3000/addproperty", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: JSON.parse(data).user.email,
          demanddetail: demandDetail,
          demandnum: demandNum,
          demandprecinct: demandPrecinct,
          demandprice: demandPrice,
          demandstreet: demandStreet,
          demandtype: demandType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Post Added!!") {
            alert("Post added successfully");
            setLoading2(false);
            navigation.navigate("MyProfile");
          } else {
            alert("Something went wrong, please try again");
            setLoading2(false);
          }
        });
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.containerFull}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={goback}>
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

      <Text style={formHead2}>Add a Demand</Text>
      <TextInput
        placeholder="Enter Demand Number"
        style={formInput}
        onChangeText={(text) => setDemandNum(text)}
      />
      <TextInput
        placeholder="Enter Demand Precinct"
        style={formInput}
        onChangeText={(text) => setDemandPrecinct(text)}
      />
      <TextInput
        placeholder="Enter Demand Street"
        style={formInput}
        onChangeText={(text) => setDemandStreet(text)}
      />
      <TextInput
        placeholder="Enter Demand Type"
        style={formInput}
        onChangeText={(text) => setDemandType(text)}
      />
      <TextInput
        placeholder="Enter Demand Price"
        style={formInput}
        onChangeText={(text) => setDemandPrice(text)}
      />
      <TextInput
        placeholder="Enter Demand Detail"
        style={formInput}
        onChangeText={(text) => setDemandDetail(text)}
        multiline={true}
        numberOfLines={5}
      />
      {loading2 ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Text style={formButton} onPress={() => handleUpload()}>
          Upload
        </Text>
      )}
    </ScrollView>
  );
};

export default AddDemand;

const styles = StyleSheet.create({
  containerFull: {
    width: "100%",
    backgroundColor: color.secondarycolor2,
    alignItems: "center",
    justifyContent: "center",
  },
  formHead2: {
    fontSize: 30,
    color: color.black,
    marginTop: 80,
    textAlign: "center",
    fontWeight: "bold",
  },
  formInput: {
    // Style for the form input
  },
  formButton: {
    // Style for the form button
  },
});
