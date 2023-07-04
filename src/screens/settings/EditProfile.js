import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { formHead, formHead2, formHead3 } from "../../commoncss/FormCSS";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color } from "../../commoncss/color";
import { LinearGradient } from "expo-linear-gradient";

const EditProfile = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#3a95ff", "#a8e5f9", "#E5FFFD"]}
      style={styles.LinearGradient}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
            alignItems: "center",
          }}
        >
          <Ionicons
            name="chevron-back-circle"
            size={24}
            color="black"
            style={styles.gohomeicon}
            onPress={() => navigation.navigate("Settings1")}
          />
          <Text style={styles.formHead}>Edit Profile</Text>
          <Text></Text>
        </View>
        <View style={{ flexDirection: "row" }}>
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
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={styles.txt1}
            onPress={() => navigation.navigate("ChangeAgency")}
          >
            Change Agency Name
          </Text>
          <Text
            style={styles.txt1}
            onPress={() => navigation.navigate("ChangeCity")}
          >
            Change City Name
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={styles.txt1}
            onPress={() => navigation.navigate("ChangeMobile")}
          >
            Change Phone No.
          </Text>
          <Text
            style={styles.txt1}
            onPress={() => navigation.navigate("ChangeDescription")}
          >
            Change Description
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // backgroundColor: color.secondarycolor2,
  },
  txt1: {
    paddingVertical: 10,
    marginHorizontal: 10,
    // paddingLeft: 10,
    fontWeight: "700",
    marginTop: 20,
    color: color.black,
    fontSize: 16,
    textAlign: "center",
    width: "44.5%",
    backgroundColor: color.secondarycolor,
    borderColor: color.black,
    borderWidth: 1,
    borderRadius: 50,
  },
  gohomeicon: {
    // position: "absolute",
    // top: 15,
    // left: 20,
    // zIndex: 10,
    // marginTop: 16,
    // //padding: 200,
    // // backgroundColor: color.black,
    marginLeft: 10,
    color: color.black,
    fontSize: 30,
  },
  formHead: {
    // marginTop: 50,
    fontSize: 30,
    color: color.black,
    textAlign: "center",
    fontWeight: "bold",
  },
});
