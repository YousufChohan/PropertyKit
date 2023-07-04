import { StyleSheet, Button, Text, Modal, View, Image } from "react-native";
import React from "react";
import logo from "../../assets/logo.png";
import { bellicon, icon1, logo2 } from "../commoncss/PageCSS";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { color } from "../commoncss/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
const Topnavbar = ({ navigation, page, page2 }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const navigateToPage1 = () => {
    navigation.navigate("AddPost");
    closeModal();
  };

  const navigateToPage2 = () => {
    navigation.navigate("AddDemand");
    closeModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#E5FFFD", "#a8e5f9", "#3a95ff"]}
        style={styles.container3}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Ionicons
            name="add-circle-sharp"
            style={styles.icon1}
            onPress={openModal}
          />
          <Modal visible={isModalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <Text style={{ fontSize: 18, fontWeight: "800" }}>
                What would you like to post?
              </Text>
              <Text></Text>

              <Button
                style={styles.Button}
                title="Post a Property to Sell"
                onPress={navigateToPage1}
              />
              <Text></Text>

              <Button
                style={styles.Button}
                title="Demand a Property to Buy"
                onPress={navigateToPage2}
              />
              <Text></Text>
              <Button
                style={{ backgroundColor: color.secondarycolor }}
                title="Cancel"
                onPress={closeModal}
              />
            </View>
          </Modal>
          {/* <Text style={{ paddingLeft: 7 }}>Add a Post</Text> */}
        </View>
        <Image source={logo} style={logo2} />

        <View style={styles.container2}>
          <Entypo
            name="chat"
            style={icon1}
            onPress={() => navigation.navigate("All_Chats")}
          />

          {/* {page2 && (
          <Feather
            name="bell"
            style={bellicon}
            onPress={() => navigation.navigate("NotificationPage")}
          />
        )} */}
        </View>
      </LinearGradient>
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
    // paddingVertical: 10,
    // paddingRight: 10,
    borderBottomColor: color.black,
    // borderWidth: 1,
    position: "absolute",
    top: 0,
    zIndex: 100,
    // backgroundColor: color.primarycolor,
    elevation: 10,
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 30,
    paddingRight: 10,
    borderBottomColor: color.black,
    borderWidth: 1,
    position: "absolute",
    top: 0,
    // zIndex: 100,
    backgroundColor: color.primarycolor,
    // elevation: 10,
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

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: color.secondarycolor2,
    paddingVertical: 200,
  },
  Button: {
    fontSize: 29,
    fontWeight: "500",
    width: "40%",
    paddingVertical: 40,
  },
});
