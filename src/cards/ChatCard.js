import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../commoncss/color";

const ChatCard = ({ chat }) => {
  return (
    <View style={styles.ChatCard}>
      <Image source={{ uri: chat.profilepic }} style={styles.image} />
      <View style={styles.c1}>
        <Text style={styles.agentname}>{chat.username}</Text>
        <Text style={styles.lastmessage}>{chat.username}</Text>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  ChatCard: {
    backgroundColor: color.secondarycolor,
    width: "100%",
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  agentname: {
    color: color.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  c1: {
    marginLeft: 20,
  },
  lastmessage: {
    color: color.black,
    fontSize: 19,
    paddingRight: 35,
  },
});
