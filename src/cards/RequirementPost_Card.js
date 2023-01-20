import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { icon1 } from "../commoncss/PageCSS";
import { FontAwesome } from "@expo/vector-icons";
import { formHead, formHead2, notecss } from "../commoncss/FormCSS";
import { color } from "../commoncss/color";
const RequirementPost_Card = ({
  agentname,
  reqPrecinct,
  reqNum,
  reqStreet,
  reqType,
  reqBudget,
  reqSpecs,
  profileImage,
  noted,
  offers,
}) => {
  //console.log(agentname);

  const [isNoted, setIsNoted] = useState(false);
  const [showOffers, setShowOffers] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{ uri: profileImage }} style={styles.profilepic} />
        <Text style={styles.agentname}>{agentname}</Text>
      </View>
      <View>
        <Text style={formHead}>Required!</Text>
        <Text style={styles.propertyDetail}></Text>
        <Text style={styles.propertyDetail}>
          Precinct: {reqPrecinct} Type: {reqType}
        </Text>
        <Text style={styles.propertyDetail}>
          Street/Road: {reqStreet} - Plot number: {reqNum}
        </Text>
        <Text style={styles.propertyDetail}></Text>
        <Text style={styles.propertyDetail}>Budget: {reqBudget}</Text>
        <Text style={styles.propertyDetail}>Specifics: {reqSpecs}</Text>
        <Text style={styles.propertyDetail}></Text>
      </View>
      <View style={styles.s2a}>
        {isNoted ? (
          <Text style={notecss}> Noted! </Text>
        ) : (
          <Text style={notecss}> Note? </Text>
        )}
        <Text style={notecss}>Comments</Text>
      </View>
      <View style={styles.s2}>
        {isNoted ? (
          <View style={styles.s21}>
            <FontAwesome
              name="check-circle"
              size={30}
              color="#023020"
              style={styles.iconliked}
              onPress={() => {
                setIsNoted(false);
              }}
            />
            <Text style={styles.interested}>{noted.length + 1}</Text>
          </View>
        ) : (
          <View style={styles.s21}>
            <FontAwesome
              name="check-circle-o"
              size={24}
              color="#023020"
              style={icon1}
              onPress={() => {
                setIsNoted(true);
              }}
            />
            <Text style={styles.notInterested}>{noted.length}</Text>
          </View>
        )}

        <View style={styles.s22}>
          <FontAwesome
            name="comment"
            style={icon1}
            onPress={() => {
              setShowOffers(!showOffers);
            }}
          />
        </View>
      </View>

      {showOffers == true && (
        <View style={styles.s3}>
          {offers.map((item, index) => {
            return (
              <View style={styles.s31} key={item.id}>
                <Text style={styles.commentuser}>{item.username}</Text>
                <Text style={styles.commenttext}>{item.offer}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default RequirementPost_Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    //paddingBottom: 10,
    flexDirection: "column",
    backgroundColor: color.secondarycolor,
    //backgroundColor: "#9FB379", //olive
    marginVertical: 8,
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
    color: color.black,
    marginLeft: 10,
    fontSize: 18,
  },
  image: {
    marginTop: 10,
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
