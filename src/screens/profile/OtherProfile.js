import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  activenavbar_icon1,
  containerFull,
  navbar_icon1,
} from "../../commoncss/PageCSS";
import { formButton, formHead } from "../../commoncss/FormCSS";
import Bottomnavbar from "../../components/Bottomnavbar";
import Topnavbar from "../../components/Topnavbar";
import PropertyPost from "../../components/PropertyPost";
import { color } from "../../commoncss/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileCard from "../../cards/ProfileCard";
import ProfileCard2 from "../../cards/ProfileCard2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import nopic from "../../../assets/nopic.png";

const OtherProfile = ({ navigation, route }) => {
  const [showDetail, SetShowDetail] = useState(true);
  const [showProperty, SetShowProperty] = useState(true);
  const [userdata, setUserdata] = React.useState(null);
  const [issameuser, setIssameuser] = React.useState(false);

  const ismyprofile = (otheruser) => {
    AsyncStorage.getItem("user").then((loggeduser) => {
      const loggeduserobj = JSON.parse(loggeduser);
      if (loggeduserobj.user._id == otheruser._id) {
        setIssameuser(true);
      } else {
        setIssameuser(false);
      }
    });
  };
  const { user, agentemail } = route.params;
  // console.log(agentemail);
  const loaddata = async () => {
    await fetch("http://10.0.2.2:3000/otheruserdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "soban@gmail.com" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("usuf", data);
        if (data.message == "User Found!!") {
          setUserdata(data.user);
          ismyprofile(data.user);
          CheckFollow(data.user);
        } else {
          alert("User Not Found");
          navigation.navigate("SearchPage");
          // navigation.navigate('Login')
        }
      });
    // .catch((err) => {
    //   // console.log(err)
    //   alert("Something Wennnt Wrong");
    //   navigation.goBack();
    // });
  };
  useEffect(() => {
    loaddata();
  }, []);

  // console.log("userdata ", userdata);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Topnavbar navigation={navigation} page2={"MainPage"} />
      <Bottomnavbar navigation={navigation} page={"SearchPage"} />
      {userdata ? (
        <ScrollView>
          <View style={styles.c1}>
            {userdata.profilepic.length > 0 ? (
              <Image
                style={styles.profilepic}
                source={{ uri: userdata.profilepic }}
              />
            ) : (
              <Image style={styles.profilepic} source={nopic} />
            )}
            <View style={styles.c11}>
              <View style={styles.c111}>
                <Ionicons
                  name="person-circle"
                  style={styles.icon}
                  size={24}
                  color="black"
                />
                <Text style={styles.txt}>{userdata.username}</Text>
              </View>
              <View style={styles.c111}>
                <Fontisto
                  name="persons"
                  style={styles.icon}
                  size={24}
                  color="black"
                />
                <Text style={styles.txt}>{userdata.agency}</Text>
              </View>
              <View style={styles.c111}>
                <Ionicons
                  name="call"
                  style={styles.icon}
                  size={24}
                  color="black"
                />
                <Text style={styles.txt}>{userdata.mobile}</Text>
              </View>
            </View>
          </View>
          <Text
            style={styles.message}
            onPress={() => {
              navigation.navigate("MessagePage", {
                fuseremail: userdata.email,
                fuserid: userdata._id,
              });
            }}
          >
            Message
          </Text>
          {showDetail ? (
            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "center" }}
              onPress={() => {
                SetShowDetail(false);
              }}
            >
              {/* <Text
                style={formButton}
                onPress={() => navigation.navigate("MessagePage")}
              >
                Message
              </Text> */}
              <Text style={styles.txt}>Show Detail</Text>
              <Feather name="arrow-down" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <View>
              <TouchableOpacity
                style={{ flexDirection: "row", justifyContent: "center" }}
                onPress={() => {
                  SetShowDetail(true);
                }}
              >
                <Text style={styles.txt}>Show Less</Text>
                <Feather name="arrow-up" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.txt}>
                E-Mail: <Text style={styles.txt}>{userdata.email}</Text>
              </Text>
              <Text style={styles.txt}>City: {userdata.city}</Text>
              {userdata.agentBio?.length > 0 && (
                <Text style={styles.txt}>About: {userdata.description}</Text>
              )}
            </View>
          )}
          <View style={styles.hr1}></View>
          <View style={styles.deals}>
            {/* <View style={styles.dealsbuttons}>
              <TouchableOpacity
                style={styles.c2a}
                onPress={() => SetShowProperty(true)}
              >
                {showProperty ? (
                  <Ionicons name="business" style={activenavbar_icon1} />
                ) : (
                  <Ionicons name="business" style={navbar_icon1} />
                )}
                <Text style={{ fontSize: 15 }}>My Property</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.c2b}
                onPress={() => navigation.navigate("Settings1")}
              >
                <Ionicons
                  name="settings"
                  style={navbar_icon1}
                  // onPress={() => navigation.navigate("SearchPage")}
                />
                <Text style={{ fontSize: 15 }}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.c2a}
                // onPress={() => SetShowProperty(false)}
              >
                {showProperty ? (
                  <MaterialCommunityIcons
                    name="format-list-checks"
                    style={navbar_icon1}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="format-list-checks"
                    style={activenavbar_icon1}
                  />
                )}

                <Text style={{ fontSize: 15 }}>My Demand</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.hr1}></View>
            {showProperty ? (
              <View style={styles.c13}>
                {userdata.posts?.reverse().map((item) => {
                  return (
                    <ProfileCard
                      key={item.post}
                      propertyNum={item.propertynum}
                      propertyImage={item.post}
                      propertyType={item.propertytype}
                      propertyStreet={item.propertystreet}
                      propertyPrecinct={item.propertyprecinct}
                    />
                  );
                })}
                {/* {datta.properties.map((item) => {
                    return (
                      <ProfileCard
                        key={item.id}
                        agentname={item.agentname}
                        propertyPrecinct={item.propertyPrecinct}
                        propertyNum={item.propertyNum}
                        propertyStreet={item.propertyStreet}
                        propertyPrice={item.propertyPrice}
                        propertyType={item.propertyType}
                        propertyDetail={item.propertyDetail}
                        propertyImage={item.propertyImage}
                        profileImage={item.profileImage}
                        interested={item.interested}
                        comments={item.comments}
                      />
                    );
                  })} */}
              </View>
            ) : (
              <View style={styles.c13}>
                {userdata.requirements.map((item) => {
                  return (
                    <ProfileCard2
                      key={item.id}
                      agentname={item.agentname}
                      reqPrecinct={item.reqPrecinct}
                      reqNum={item.reqNum}
                      reqStreet={item.reqStreet}
                      reqType={item.reqType}
                      reqBudget={item.reqBudget}
                      reqSpecs={item.reqSpecs}
                      profileImage={item.profileImage}
                      noted={item.noted}
                      offers={item.offers}
                    />
                  );
                })}
              </View>
            )}
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color="black" style={styles.c1loader} />
      )}
    </SafeAreaView>
  );
};

export default OtherProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: color.secondarycolor,
    paddingVertical: 50,
  },
  c1: {
    flexDirection: "row",
    width: "60%",
    marginTop: 35,
    marginBottom: 10,

    // alignItems: "center",
  },
  c1loader: {
    marginTop: 40,
  },
  profilepic: {
    width: 90,
    height: 90,
    borderRadius: 75,
    marginHorizontal: 10,
  },
  email: {
    fontSize: 18,
  },
  dealsbuttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  icon: {
    size: 24,
    color: color.primarycolor,
    marginRight: 5,
  },
  txt: {
    color: color.primarycolor,
    fontSize: 20,
    fontWeight: "bold",
    // margin: 10,
    // backgroundColor: color.primarycolor,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 20,
  },
  txt1: {
    color: color.black,
    fontSize: 20,
    fontWeight: "bold",
    // borderTopWidth: 2,
    // justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: color.primarycolor,
    borderRadius: 20,
  },
  txt2: {
    color: color.black,
    fontSize: 20,
  },
  c11: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  c111: {
    flexDirection: "row",
    marginVertical: 2,
  },
  hr1: {
    width: "100%",
    height: 1,
    marginVertical: 5,
    backgroundColor: color.primarycolor,
  },
  description: {
    color: color.black,
    fontSize: 15,
    // marginVertical: 10,
    // backgroundColor: color.secondarycolor,
    // width: "100%",
    // padding: 10,
    // paddingVertical: 20,
  },
  postpic: {
    width: "30%",
    height: 120,
    margin: 5,
  },
  c13: {
    backgroundColor: color.primarycolor,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    justifyContent: "center",
  },
  c2: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  c2a: {
    width: "37%",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: color.primarycolor,
    // alignSelf: "center",
    borderRadius: 20,
    // borderColor: color.black,
    borderWidth: 1,
  },
  c2b: {
    width: "20%",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: color.primarycolor,
    // alignSelf: "center",
    borderRadius: 20,
    borderColor: color.primarycolor,
    // borderColor: color.black,
    borderWidth: 3,
  },
  refresh: {
    position: "absolute",
    top: 50,
    right: 5,
    zIndex: 1,
  },

  message: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    backgroundColor: color.primarycolor,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    width: 145,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
  },
});