import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { icon1 } from "../commoncss/PageCSS";
import { FontAwesome } from "@expo/vector-icons";
import { formHead, formHead2, notecss } from "../commoncss/FormCSS";
import { color } from "../commoncss/color";
const ProfileCard2 = ({
  navigation,
  route,
  agentemail,
  agentname,
  demandPrecinct,
  demandNum,
  demandStreet,
  demandPrice,
  demandType,
  demandDetail,
  profileImage,
  interested,
  comments,
}) => {
  //console.log(agentname);

  return (
    <View style={styles.container}>
      {/* <View style={styles.c1}>
        <Image source={{ uri: profileImage }} style={styles.profilepic} />
        <Text style={styles.agentname}>{agentname}</Text>
      </View> */}
      <View>
        <Text style={formHead}>Required!</Text>
        <Text style={styles.propertyDetail}>Precinct: {demandPrecinct}</Text>
        <Text style={styles.propertyDetail}>Type: {demandType}</Text>
        <Text style={styles.propertyDetail}>Street/Road: {demandStreet}</Text>
        <Text style={styles.propertyDetail}>Plot number: {demandNum}</Text>
        <Text style={styles.propertyDetail}>Budget: {demandPrice}</Text>
      </View>
    </View>
  );
};

export default ProfileCard2;

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
    elevation: 20,
  },
  c1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
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
    fontWeight: "600",
    color: color.black,
    marginLeft: 10,
    fontSize: 18,
  },
  image: {
    // marginTop: 10,
    borderRadius: 2,
    //marginHorizontal: "2.5%",
    width: "100%",
    //height: 390,
    aspectRatio: 2.1,
    resizeMode: "stretch",
  },
  s2: {
    // marginLeft: "25%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    //borderWidth: 1,
    //borderTopRightRadius: 40,
    //borderTopLeftRadius: 40,
    //borderTopColor: "black",
    backgroundColor: color.primarycolor,
    padding: 3,
    alignItems: "center",
  },
  s2a: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: color.primarycolor,
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
    justifyContent: "center",
    marginLeft: 20,
  },
  s3: {
    width: "100%",
    backgroundColor: color.black,
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
