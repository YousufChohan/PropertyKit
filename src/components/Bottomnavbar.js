import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  activenavbar_icon1,
  icon1,
  icon2,
  navbar_icon1,
} from "../commoncss/PageCSS";
import { LinearGradient } from "expo-linear-gradient";

import { color } from "../commoncss/color";
import { SafeAreaView } from "react-native-safe-area-context";

const Bottomnavbar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#a8e5f9", "#3a95ff", "#1984D4"]}
        style={styles.container3}
      >
        {page === "MainPage" ? (
          <View>
            <Ionicons
              name="business"
              style={activenavbar_icon1}
              onPress={() => navigation.navigate("MainPage")}
            />
            <Text style={{ fontSize: 9 }}>Property</Text>
          </View>
        ) : (
          <View>
            <Ionicons
              name="business"
              style={navbar_icon1}
              onPress={() => navigation.navigate("MainPage")}
            />
            <Text style={{ fontSize: 9 }}>Property</Text>
          </View>
        )}
        {page === "Requirement" ? (
          <View>
            <MaterialCommunityIcons
              name="format-list-checks"
              style={activenavbar_icon1}
              onPress={() => navigation.navigate("Requirement")}
            />
            <Text style={{ fontSize: 9 }}>Demand</Text>
          </View>
        ) : (
          <View>
            <MaterialCommunityIcons
              name="format-list-checks"
              style={navbar_icon1}
              onPress={() => navigation.navigate("Requirement")}
            />
            <Text style={{ fontSize: 9 }}>Demand</Text>
          </View>
        )}
        {/* <View>
        <FontAwesome name="plus" style={navbar_icon1} />
        <Text style={styles.captions}> Post</Text>
      </View> */}
        {page === "SearchPage" ? (
          <View>
            <MaterialIcons
              name="search"
              style={activenavbar_icon1}
              onPress={() => navigation.navigate("SearchPage")}
            />
            <Text style={styles.captions}>Search</Text>
          </View>
        ) : (
          <View>
            <MaterialIcons
              name="search"
              style={navbar_icon1}
              onPress={() => navigation.navigate("SearchPage")}
            />
            <Text style={styles.captions}>Search</Text>
          </View>
        )}
        {page === "MyProfile" ? (
          <View style={styles.center}>
            <FontAwesome
              name="user"
              size={24}
              style={activenavbar_icon1}
              onPress={() => navigation.navigate("MyProfile")}
            />
            <Text style={styles.captions}>Profile</Text>
          </View>
        ) : (
          <View style={styles.center}>
            <FontAwesome
              name="user"
              size={24}
              style={navbar_icon1}
              onPress={() => navigation.navigate("MyProfile")}
            />
            <Text style={styles.captions}>Profile</Text>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default Bottomnavbar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: color.primarycolor,
    //borderTopWidth: 1,
    //borderColor: "#AAEEC2",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    // paddingVertical: 8,
    alignItems: "center",
  },
  container3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: color.primarycolor,
    //borderTopWidth: 1,
    //borderColor: "#AAEEC2",
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    zIndex: 100,
    paddingVertical: 8,
    alignItems: "center",
  },
  captions: {
    fontSize: 10,
  },
  center: {
    width: "8%",
    justifyContent: "center",
  },
});
