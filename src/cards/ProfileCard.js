import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { icon1, row } from "../commoncss/PageCSS";
import { FontAwesome } from "@expo/vector-icons";
import { notecss } from "../commoncss/FormCSS";
import { color } from "../commoncss/color";
const ProfileCard = ({
  agentname,
  propertyPrecinct,
  propertyNum,
  propertyStreet,
  propertyPrice,
  propertyType,
  propertyDetail,
  propertyImage,
  profileImage,
  interested,
  comments,
}) => {
  //console.log(agentname);

  const [isInterested, setIsInterested] = useState(false);
  const [showcomments, setShowcomments] = useState(false);

  return (
    <View style={styles.container}>
      {/* <View style={styles.c1}>
        <Image source={{ uri: profileImage }} style={styles.profilepic} />
        <Text style={styles.agentname}>{agentname}</Text>
      </View> */}
      <View>
        <Text style={styles.propertyDetail}>Precinct: {propertyPrecinct}</Text>
        <Text style={styles.propertyDetail}>Type: {propertyType}</Text>
        <Text style={styles.propertyDetail}>Street/Road: {propertyStreet}</Text>
        <Text style={styles.propertyDetail}>Plot number: {propertyNum}</Text>
        {/* <Text style={styles.propertyDetail}></Text> */}
      </View>
      <Image source={{ uri: propertyImage }} style={styles.image} />
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    width: "47%",
    marginHorizontal: 5,
    borderWidth: 2,
    alignContent: "center",
    alignItems: "center",
    borderColor: color.black,
    borderRadius: 15,
    paddingBottom: 10,
    flexDirection: "column",
    backgroundColor: color.secondarycolor,
    //backgroundColor: "#9FB379", //olive
    marginVertical: 8,
  },
  c1: {
    marginTop: 2,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.black,
    backgroundColor: color.primarycolor,
  },
  profilepic: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: color.black,
    borderWidth: 1,
  },
  agentname: {
    color: color.black,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  propertyDetail: {
    color: color.black,
    marginLeft: 10,
    fontSize: 18,
  },
  image: {
    marginTop: 10,
    borderRadius: 4,
    //marginHorizontal: "2.5%",
    width: "98%",
    //height: 390,
    aspectRatio: 1,
    resizeMode: "stretch",
  },
  s2: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: color.secondarycolor,
    padding: 2,
    justifyContent: "space-around",
    //justifyContent: "center",
    alignItems: "center",
  },
  s2a: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: color.secondarycolor,
    //padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  s21: {
    // width: '100%',
    flexDirection: "row",
    alignItems: "center",
  },
  notInterested: {
    color: color.black,
    marginLeft: 5,
    fontSize: 25,
  },
  interested: {
    color: color.black,
    marginLeft: 5,
    fontSize: 25,
  },
  iconInterested: {
    color: color.black,
    fontSize: 40,
  },
  s22: {
    marginLeft: 20,
  },
  s3: {
    width: "100%",
    backgroundColor: color.secondarycolor,
    padding: 10,
  },
  commentuser: {
    color: color.black,
    fontWeight: "bold",
    fontSize: 17,
    position: "relative",
  },
  commenttext: {
    color: color.black,
    fontSize: 17,
    marginLeft: 5,
  },
  s31: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 75,
    marginVertical: 3,
  },
});
