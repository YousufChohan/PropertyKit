import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useEffect, useState } from "react";
import { color } from "../../commoncss/color";
// import { ipAddress } from "../../commoncss/color";
import Topnavbar from "../../components/Topnavbar";
import Bottomnavbar from "../../components/Bottomnavbar";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { formHead } from "../../commoncss/FormCSS";
import ChatCard from "../../cards/ChatCard";
import { searchbar } from "../../commoncss/PageCSS";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

const All_Chats = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    AsyncStorage.getItem("user")
      .then(async (value) => {
        fetch(color.ipAddress + "/msguser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + JSON.parse(value).token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log('our user data ', data.user.username)
            // setOuruserdata(data.user);
            // setUserid(data.user._id);
            console.log(data);
            setChats(data.user);
          })
          .catch((err) => {
            navigation.navigate("Login");
          });
      })
      .catch((err) => {
        navigation.navigate("Login");
      });
  };
  const [keyword, setKeyword] = useState("");
  return (
    <LinearGradient
      colors={["#3a95ff", "#a8e5f9", "#E5FFFD"]}
      style={styles.LinearGradient}
    >
      <ScrollView style={styles.container}>
        <Topnavbar navigation={navigation} />
        <SafeAreaView>
          <View style={styles.c1}>
            <Ionicons
              name="arrow-back"
              style={styles.gohomeicon}
              onPress={() => navigation.goBack()}
            />
            <Text style={formHead}>Your Dealings</Text>
            {/* <TextInput
              style={styles.searchbar}
              placeholder="Search by Agent Name"
              onChangeText={(text) => setKeyword(text)}
            /> */}
          </View>

          <View style={styles.c2}>
            {chats
              .filter((chat) => {
                if (keyword == "") return chat;
                else if (
                  chat.agentname.toLowerCase().includes(keyword.toLowerCase())
                )
                  return chat;
              })
              .map((chat) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("MessagePage", {
                        fuseremail: chat.email,
                        fuserid: chat._id,
                      });
                    }}
                  >
                    <ChatCard
                      key={chat.username}
                      chat={chat}
                      agency={chat.agency}
                    />
                  </TouchableOpacity>
                );
              })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

export default All_Chats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // backgroundColor: color.primarycolor,
  },
  gohomeicon: {
    position: "absolute",
    top: 15,
    left: 20,
    zIndex: 10,
    //marginTop: 50,
    //padding: 200,
    // backgroundColor: color.black,
    color: color.black,
    fontSize: 30,
  },
  c1: {
    marginTop: 90,
    width: "95%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    backgroundColor: "rgba(111, 228, 255, 0.3)",
    alignSelf: "center",
    borderRadius: 20,
    borderColor: color.black,
    borderWidth: 1,
  },
  searchbar: {
    width: "90%",
    backgroundColor: color.white,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 18,
  },
  c2: {
    width: "100%",
    padding: 10,
  },
  LinearGradient: {
    flex: 1,
  },
});
