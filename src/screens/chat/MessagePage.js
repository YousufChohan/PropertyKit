import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";

import React, { useEffect, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import nopic from "../../../assets/nopic.png";
import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color } from "../../commoncss/color";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const socket = io("http://192.168.0.106:3001");

const MessagePage = ({ navigation, route }) => {
  const { fuseremail, fuserid } = route.params;

  const [ouruserdata, setOuruserdata] = React.useState(null);
  const [fuserdata, setFuserdata] = React.useState(null);

  const [userid, setUserid] = React.useState(null);
  const [roomid, setRoomid] = React.useState(null);
  const [chat, setChat] = React.useState([""]);

  // OUR ID & ROOM ID FOR SOCKET.IO

  useEffect(() => {
    loaddata();
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("recieved message - ", data);
      loadMessages(roomid);
    });
  }, []);

  const sortroomid = (id1, id2) => {
    if (id1 > id2) {
      return id1 + id2;
    } else {
      return id2 + id1;
    }
  };

  const loaddata = async () => {
    AsyncStorage.getItem("user")
      .then(async (value) => {
        fetch(color.ipAddress + "/userdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + JSON.parse(value).token,
          },
          body: JSON.stringify({ email: JSON.parse(value).user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message == "User Found!!") {
              // console.log('our user data ', data.user.username)
              setOuruserdata(data.user);
              setUserid(data.user._id);

              fetch(color.ipAddress + "/otheruserdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: fuseremail }),
              })
                .then((res) => res.json())
                .then(async (data1) => {
                  if (data1.message == "User Found!!") {
                    // console.log('fuser data ', data1.user.username)
                    setFuserdata(data1.user);
                    let temproomid = await sortroomid(fuserid, data.user._id);

                    setRoomid(temproomid);
                    // console.log('room id ', temproomid)
                    socket.emit("join_room", { roomid: temproomid });
                    loadMessages(temproomid);
                  } else {
                    alert("User Not Found");
                    navigation.navigate("SearchUserPage");
                    // navigation.navigate('Login')
                  }
                })
                .catch((err) => {
                  // console.log(err)
                  alert("Something Went Wrong");
                  navigation.navigate("SearchUserPage");
                });
            } else {
              alert("Login Again");
              navigation.navigate("Login");
            }
          })
          .catch((err) => {
            navigation.navigate("Login");
          });
      })
      .catch((err) => {
        navigation.navigate("Login");
      });
  };

  // const joinroom = () => {
  //     socket.emit('join_room', { roomid: roomid })
  // }

  const sendMessage = async () => {
    const messagedata = {
      message: currentmessage,
      roomid: roomid,
      senderid: userid,
      recieverid: fuserdata._id,
    };
    fetch(color.ipAddress + "/savemessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messagedata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Message saved successfully") {
          socket.emit("send_message", messagedata);
          loadMessages(roomid);
          console.log("message sent");

          setCurrentmessage("");
        } else {
          alert("Network Error");
          setCurrentmessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadMessages(roomid);
  }, []);

  const [currentmessage, setCurrentmessage] = React.useState(null);

  const loadMessages = (temproomid) => {
    fetch(color.ipAddress + "/getmessages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomid: temproomid }),
    })
      .then((res) => res.json())
      .then((data) => {
        setChat(data);
      });
  };
  const scrollViewRef = useRef();
  return (
    <LinearGradient
      colors={["#a8e5f9", "#3a95ff", "#1984D4"]}
      style={styles.container}
    >
      <View style={styles.s1}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goback}
        >
          <Ionicons name="arrow-back" size={24} color={color.black} />
        </TouchableOpacity>

        {fuserdata?.profilepic ? (
          <Image
            source={{ uri: fuserdata?.profilepic }}
            style={styles.profilepic}
          />
        ) : (
          <Image source={nopic} style={styles.profilepic} />
        )}
        <Text style={styles.username}>{fuserdata?.username}</Text>
      </View>

      <ScrollView
        style={styles.messageView}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {chat.map((item, index) => {
          return (
            <View style={styles.message} key={index}>
              {item.senderid == userid && (
                <View style={styles.messageRight}>
                  <Text style={styles.messageTextRight}>{item.message}</Text>
                </View>
              )}
              {item.senderid != userid && item != "" && (
                <View style={styles.messageLeft}>
                  <Text style={styles.messageTextLeft}>{item.message}</Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.sbottom}>
        <TextInput
          style={styles.sbottominput}
          placeholder="Type a message"
          placeholderTextColor={"white"}
          onChangeText={(text) => setCurrentmessage(text)}
          value={currentmessage}
        />
        <TouchableOpacity style={styles.sbottombtn}>
          {currentmessage ? (
            <MaterialIcons
              name="send"
              size={24}
              color="white"
              onPress={() => sendMessage()}
            />
          ) : (
            <MaterialIcons
              name="send"
              size={24}
              color={color.secondarycolor2}
            />
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default MessagePage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: color.secondarycolor,
  },
  profilepic: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  username: {
    color: color.black,
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  s1: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: color.secondarycolor2,
    padding: 10,
    marginBottom: 10,
  },
  sbottom: {
    width: "97%",
    height: 60,
    backgroundColor: "#111111",
    flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: 2,
    // marginRight: 3,
    justifyContent: "space-between",
    alignSelf: "center",
    padding: 10,
    position: "absolute",
    bottom: 3,
    borderRadius: 30,
  },
  sbottominput: {
    width: "80%",
    height: 50,
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 19,
    color: "white",
  },

  message: {
    width: "100%",
    // padding:10,
    borderRadius: 10,
    // marginVertical:5,
    // backgroundColor:'red',
  },
  messageView: {
    width: "100%",
    marginBottom: 50,
  },
  messageRight: {
    width: "100%",
    alignItems: "flex-end",
    // backgroundColor:'red'
  },
  messageTextRight: {
    color: color.black,
    backgroundColor: color.secondarycolor,
    // width:'min-content',
    minWidth: 100,
    padding: 10,
    fontSize: 17,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  messageLeft: {
    width: "100%",
    alignItems: "flex-start",
    // backgroundColor:'red'
  },
  messageTextLeft: {
    color: "white",
    backgroundColor: color.black,
    fontSize: 17,
    minWidth: 100,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  goback: {
    marginHorizontal: 5,
  },
});
