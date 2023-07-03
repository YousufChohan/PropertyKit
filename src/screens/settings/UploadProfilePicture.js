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
import { firebase } from "../../firebase/Config";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UploadProfilePicture = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    // console.log(result)

    if (!result.cancelled) {
      const source = { uri: result.uri };
      setImage(source);

      const response = await fetch(result.uri);
      const blob = await response.blob();
      const filename = result.uri.substring(result.uri);

      const ref = firebase.storage().ref().child(filename);
      const snapshot = await ref.put(blob);
      const url = await snapshot.ref.getDownloadURL();

      // console.log(url)
      return url;
    } else {
      return null;
    }
  };

  const handleUpload = () => {
    // pickImage()
    AsyncStorage.getItem("user").then((data) => {
      setLoading(true);

      pickImage().then((url) => {
        fetch("http://192.168.43.73:3000/setprofilepic", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
            profilepic: url,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Profile Picture Upload!!") {
              setLoading(false);
              alert("Profile picture updated successfully");
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
            console.log(err);
          });
      });
    });
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
      <Text style={formHead2}>Choose a profile profile</Text>

      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={formButton} onPress={() => handleUpload()}>
          Upload
        </Text>
      )}
    </View>
  );
};

export default UploadProfilePicture;

const styles = StyleSheet.create({});
