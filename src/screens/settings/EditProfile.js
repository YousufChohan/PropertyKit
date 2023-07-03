import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { formHead, formHead2, formHead3 } from "../../commoncss/FormCSS";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color } from "../../commoncss/color";
const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back-circle"
        size={24}
        color="black"
        style={styles.gohomeicon}
        onPress={() => navigation.navigate("Settings1")}
      />
      <Text style={styles.formHead}>Edit Profile</Text>

      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate("UploadProfilePicture")}
      >
        Change Profile Picture
      </Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate("ChangeUsername")}
      >
        Change Username
      </Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate("ChangeDescription")}
      >
        Change Description
      </Text>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: color.secondarycolor2,
  },
  txt1: {
    paddingVertical: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    marginTop: 20,
    color: color.black,
    fontSize: 20,
    // width: "60%",
    backgroundColor: color.primarycolor,
    borderColor: color.primarycolor,
    borderWidth: 1,
    borderRadius: 50,
  },
  gohomeicon: {
    position: "absolute",
    top: 15,
    left: 20,
    zIndex: 10,
    marginTop: 16,
    //padding: 200,
    // backgroundColor: color.black,
    color: color.black,
    fontSize: 30,
  },
  formHead: {
    marginTop: 50,
    fontSize: 30,
    color: color.black,
    textAlign: "center",
    fontWeight: "bold",
  },
});
