import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { icon1, row } from "../commoncss/PageCSS";
import { FontAwesome } from "@expo/vector-icons";
import { notecss } from "../commoncss/FormCSS";
import { color } from "../commoncss/color";
const PropertyPost_Card = ({
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
      <View style={styles.c1}>
        <Image source={{ uri: profileImage }} style={styles.profilepic} />
        <Text style={styles.agentname}>{agentname}</Text>
      </View>
      <View>
        <Text style={styles.propertyDetail}>
          Precinct: {propertyPrecinct} Type: {propertyType}
        </Text>
        <Text style={styles.propertyDetail}>
          Street/Road: {propertyStreet} - Plot number: {propertyNum}
        </Text>
        <Text style={styles.propertyDetail}></Text>
        <Text style={styles.propertyDetail}>Price: {propertyPrice}</Text>
        <Text style={styles.propertyDetail}>Detail: {propertyDetail}</Text>
      </View>
      <Image source={{ uri: propertyImage }} style={styles.image} />
      <View style={styles.s2a}>
        {isInterested ? (
          <Text style={notecss}>Interested! </Text>
        ) : (
          <Text style={notecss}>Interested? </Text>
        )}
        <Text style={notecss}>Comments</Text>
      </View>
      <View style={styles.s2}>
        {isInterested ? (
          <View style={styles.s21}>
            <AntDesign
              name="star"
              size={30}
              color="#023020"
              style={styles.iconLiked}
              onPress={() => {
                setIsInterested(false);
              }}
            />
            {/* <Text style={styles.interested}>{interested.length + 1}</Text> */}
          </View>
        ) : (
          <View style={styles.s21}>
            <AntDesign
              name="staro"
              size={24}
              color="#023020"
              style={icon1}
              onPress={() => {
                setIsInterested(true);
              }}
            />
            {/* <Text style={styles.notInterested}>{interested.length}</Text> */}
          </View>
        )}

        <View style={styles.s22}>
          <FontAwesome
            name="comment"
            size={24}
            //color="black"
            style={icon1}
            onPress={() => {
              setShowcomments(!showcomments);
            }}
          />
        </View>
      </View>

      {showcomments == true && (
        <View style={styles.s3}>
          {comments.map((item, index) => {
            return (
              <View style={styles.s31} key={item.id}>
                <Text style={styles.commentuser}>{item.username}</Text>
                <Text style={styles.commenttext}>{item.comment}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default PropertyPost_Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    paddingBottom: 10,
    flexDirection: "column",
    backgroundColor: color.primarycolor,
    //backgroundColor: "#9FB379", //olive
    marginBottom: 16,
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
    backgroundColor: color.secondarycolor,
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
    fontWeight: "600",
    fontSize: 18,
  },
  image: {
    marginTop: 10,
    borderRadius: 2,
    //marginHorizontal: "2.5%",
    width: "100%",
    // height: "100%",
    aspectRatio: 1,
    // resizeMode: "stretch",
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
