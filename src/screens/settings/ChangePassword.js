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
import { containerFull, goback, logo1 } from "../../commoncss/PageCSS";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../assets/logo.png";
import {
  formButton,
  formHead2,
  formHead3,
  formInput,
  formTextLinkRight,
} from "../../commoncss/FormCSS";
import { color } from "../../commoncss/color";
const ChangePassword = ({ navigation }) => {
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmnewpassword, setConfirmNewpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = () => {
    if (oldpassword === "" || newpassword === "" || confirmnewpassword === "") {
      alert("Please fill all the fields");
    } else if (newpassword !== confirmnewpassword) {
      alert("New password and confirm new password must be same");
    } else {
      setLoading(true);
      AsyncStorage.getItem("user").then((data) => {
        fetch(color.ipAddress + "/changepassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + JSON.parse(data).tokens,
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
            oldpassword: oldpassword,
            newpassword: newpassword,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message == "Password Changed Successfully") {
              setLoading(false);
              alert("Password Changed Successfully");
              AsyncStorage.removeItem("user");
              navigation.navigate("Login");
            } else {
              alert("Wrong Password");
              setLoading(false);
            }
          });
      });
    }
  };
  // navigation.navigate('ForgotPassword_AccountRecovered')
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings1")}
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
        placeholder="Enter Old password"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setOldpassword(text)}
      />
      <TextInput
        placeholder="Enter New password"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setNewpassword(text)}
      />
      <TextInput
        placeholder="Confirm New password"
        style={formInput}
        secureTextEntry
        onChangeText={(text) => setConfirmNewpassword(text)}
      />
      <Text
        style={formTextLinkRight}
        onPress={() => navigation.navigate("ForgotPassword_Email")}
      >
        Forgot Password?
      </Text>
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

export default ChangePassword;

const styles = StyleSheet.create({});
