import {
  StyleSheet,
  Text,
  ScrollView,
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
  formInput,
} from "../../commoncss/FormCSS";
import { MaterialIcons } from "@expo/vector-icons";
import { firebase } from "../../firebase/Config";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color } from "../../commoncss/color";

const AddPost = ({ navigation }) => {
  const [propertyDetail, setpropertyDetail] = useState("");
  const [propertyNum, setpropertyNum] = useState("");
  const [propertyPrecinct, setpropertyPrecinct] = useState("");
  const [propertyStreet, setpropertyStreet] = useState("");
  const [propertyType, setpropertyType] = useState("");
  const [propertyPrice, setpropertyPrice] = useState("");

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [post, setPost] = useState("");

  const pickImage = async () => {
    setLoading1(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    // console.log(result)

    if (!result.canceled) {
      const source = { uri: result.uri };

      const response = await fetch(result.uri);
      const blob = await response.blob();
      const filename = result.uri.substring(result.uri);

      const ref = firebase.storage().ref().child(filename);
      const snapshot = await ref.put(blob);
      const url = await snapshot.ref.getDownloadURL();

      setLoading1(false);
      setPost(url);
      console.log(url);
    } else {
      setLoading1(false);
      setPost(null);
    }
  };

  const handleUpload = () => {
    if (post != null) {
      AsyncStorage.getItem("user").then((data) => {
        setLoading2(true);

        fetch(color.ipAddress + "/addproperty", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
            post: post,
            propertydetail: propertyDetail,
            propertynum: propertyNum,
            propertyprecinct: propertyPrecinct,
            propertyprice: propertyPrice,
            propertystreet: propertyStreet,
            propertytype: propertyType,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message == "Post Added!!") {
              alert("Post added successfully");
              setLoading2(false);
              navigation.navigate("MyProfile");
            } else {
              alert("Something went wrong, please try again");
              setLoading2(false);
            }
          });
      });
    } else {
      alert("Please select an image");
    }
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

      {/* <Image source={logo} style={logo1} /> */}
      {loading1 ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <>
          {post ? (
            <TouchableOpacity onPress={() => pickImage()}>
              <Image
                source={{ uri: post }}
                style={{
                  width: 200,
                  height: 200,
                  marginVertical: 10,
                  marginTop: 80,
                }}
              />
            </TouchableOpacity>
          ) : (
            <View>
              <Text style={styles.formHead}>Add New Post</Text>
              <Text
                style={styles.addpost}
                onPress={() => {
                  pickImage();
                }}
              >
                Select Property Image
              </Text>
            </View>
          )}
        </>
      )}

      {/*  */}
      <Text style={formHead2}>Add a Property</Text>
      <TextInput
        placeholder="Enter Property Number"
        style={formInput}
        onChangeText={(text) => setpropertyNum(text)}
      />
      <TextInput
        placeholder="Enter Property Precinct"
        style={formInput}
        onChangeText={(text) => setpropertyPrecinct(text)}
      />
      <TextInput
        placeholder="Enter Property Street"
        style={formInput}
        onChangeText={(text) => setpropertyStreet(text)}
      />
      <TextInput
        placeholder="Enter Property Type"
        style={formInput}
        onChangeText={(text) => setpropertyType(text)}
      />
      <TextInput
        placeholder="Enter Property Price"
        style={formInput}
        onChangeText={(text) => setpropertyPrice(text)}
      />
      <TextInput
        placeholder="Enter Property Detail"
        style={formInput}
        onChangeText={(text) => setpropertyDetail(text)}
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

export default AddPost;

const styles = StyleSheet.create({
  addpost: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "100",
    color: color.black,

    borderColor: color.black,
    borderWidth: 4,
    borderRadius: 10,
    paddingVertical: 70,
    width: "80%",
    textAlign: "center",
    marginVertical: 20,
  },
  containerFull: {
    width: "100%",
    // height: "100%",
    backgroundColor: color.secondarycolor2,
    alignItems: "center",
    justifyConctent: "center",
  },
  formHead: {
    fontSize: 30,
    color: color.black,
    marginTop: 80,
    textAlign: "center",
    fontWeight: "bold",
  },
});
