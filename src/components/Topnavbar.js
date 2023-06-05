import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import logo from "../../assets/logo.png";
import { bellicon, icon1, logo2 } from "../commoncss/PageCSS";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { color } from "../commoncss/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
const Topnavbar = ({ navigation, page, page2 }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        name="add-circle-sharp"
        style={styles.icon1}
        onPress={() => navigation.navigate("AddPost")}
      />
      <Image source={logo} style={logo2} />

      <View style={styles.container2}>
        {page && (
          <Entypo
            name="chat"
            style={icon1}
            onPress={() => navigation.navigate("All_Chats")}
          />
        )}
        {page2 && (
          <Feather
            name="bell"
            style={bellicon}
            onPress={() => navigation.navigate("NotificationPage")}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Topnavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingRight: 10,
    borderBottomColor: color.black,
    borderWidth: 1,
    position: "absolute",
    top: 0,
    zIndex: 100,
    backgroundColor: color.primarycolor,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    //width: "20%",
    // paddingVertical: 10,
    // paddingTop: 30,
    // paddingRight: 10,
    // position: "absolute",
    // top: 0,
    // zIndex: 100,
    // backgroundColor: "#CAEEC2",
  },
  icon1: {
    marginLeft: 15,
    color: color.black,
    fontSize: 30,
  },
});
