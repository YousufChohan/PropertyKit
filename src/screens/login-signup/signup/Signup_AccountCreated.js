import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { containerFull, goback, logo1, row } from "../../../commoncss/PageCSS";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../../assets/logo.png";
import {
  formButton,
  formHead2,
  formHead3,
  formInput,
} from "../../../commoncss/FormCSS";
import { Entypo } from "@expo/vector-icons";
const Signup_AccountCreated = ({ navigation }) => {
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
      <View style={row}>
        <Entypo name="check" size={24} color="green" />
        <Text style={formHead2}> Account Created Successfully</Text>
      </View>
      <Text style={formButton} onPress={() => navigation.navigate("Login")}>
        Continue
      </Text>
    </View>
  );
};

export default Signup_AccountCreated;

const styles = StyleSheet.create({});
