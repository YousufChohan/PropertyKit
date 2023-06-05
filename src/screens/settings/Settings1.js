import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Topnavbar from "../../components/Topnavbar";
import { color } from "../../commoncss/color";
import { formHead } from "../../commoncss/FormCSS";

const Settings1 = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Topnavbar navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <Ionicons
          name="arrow-back"
          style={styles.gohomeicon}
          onPress={() => navigation.navigate("MyProfile")}
        />
        <Text style={formHead}>Settings</Text>
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
        <Text style={styles.txt1}>3. Customer Support</Text>
        <Text style={styles.txt1} onPress={() => navigation.navigate("Login")}>
          4. Logout
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Settings1;

const styles = StyleSheet.create({
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
  container: {
    marginTop: 80,
    width: "100%",
    height: "100%",
    backgroundColor: color.white,
  },
  txt1: {
    paddingLeft: 10,
    marginTop: 10,
    color: color.black,
    fontSize: 20,
    backgroundColor: color.secondarycolor,
    borderBottomColor: color.primarycolor,
    borderBottomWidth: 1,
  },
});
