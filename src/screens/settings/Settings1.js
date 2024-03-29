import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Topnavbar from "../../components/Topnavbar";
import { color } from "../../commoncss/color";
import { formHead } from "../../commoncss/FormCSS";
import { LinearGradient } from "expo-linear-gradient";

const Settings1 = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Topnavbar navigation={navigation} />
      <LinearGradient
        colors={["#E5FFFD", "#a8e5f9", "#3a95ff"]}
        style={styles.LinearGradient}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.settingandbackcontainer}>
            <Ionicons
              name="arrow-back"
              style={styles.gohomeicon}
              onPress={() => navigation.navigate("MyProfile")}
            />
            <Text style={styles.formHead}>Settings</Text>
          </View>
          <Text
            style={styles.txt1}
            onPress={() => navigation.navigate("EditProfile")}
          >
            1. Edit Profile
          </Text>
          <Text
            style={styles.txt1}
            onPress={() => navigation.navigate("ChangePassword")}
          >
            2. Change Password
          </Text>
          {/* <Text style={styles.txt1}>3. Customer Support</Text> */}
          <Text
            style={styles.txt1}
            onPress={() => navigation.navigate("Login")}
          >
            3. Logout
          </Text>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default Settings1;

const styles = StyleSheet.create({
  settingandbackcontainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  gohomeicon: {
    // position: "absolute",
    // top: 50,
    // left: 20,
    // zIndex: 10,
    // marginTop: 16,
    //padding: 200,
    // backgroundColor: color.black,
    color: color.black,
    marginLeft: 10,
    fontSize: 30,
  },
  container: {
    marginTop: 80,
    width: "100%",
    height: "100%",
    // backgroundColor: color.white,
  },
  txt1: {
    elevation: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    marginTop: 15,
    color: color.black,
    fontSize: 20,
    // width: "60%",
    backgroundColor: color.secondarycolor,
    // borderColor: color.primarycolor,
    // borderWidth: 1,
    borderRadius: 50,
  },
  formHead: {
    fontSize: 30,
    color: color.black,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 110,
  },
});
