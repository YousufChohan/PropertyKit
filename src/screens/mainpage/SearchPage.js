import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  activenavbar_icon1,
  containerFull,
  navbar_icon1,
  searchbar,
} from "../../commoncss/PageCSS";
import { formHead } from "../../commoncss/FormCSS";
import Bottomnavbar from "../../components/Bottomnavbar";
import Topnavbar from "../../components/Topnavbar";
import PropertyPost from "../../components/PropertyPost";
import { SearchBar } from "react-native-screens";
import { color } from "../../commoncss/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import SearchCard from "../../cards/SearchCard";

const SearchPage = ({ navigation, page }) => {
  let data = [
    {
      id: 1,
      agentname: "usufchohan",
      propertyPrecinct: "10A",
      propertyNum: 345,
      propertyStreet: "6B",
      propertyPrice: 18720000,
      propertyType: "Villa",
      propertyDetail:
        "It is a corner villa on main road with an amazing view from above the mountain into the kati pahari",
      propertyImage: "https://picsum.photos/200/320",
      profile_image: "https://picsum.photos/200/320",
      interested: ["malikriaz", "sufyanmallick"],
      comments: [
        {
          id: 1,
          username: "sufyanmallick",
          comment: "bn is the we",
        },
        {
          id: 2,
          username: "malikriaz",
          comment: "we is the bn",
        },
      ],
    },
    {
      id: 2,
      agentname: "khan",
      propertyPrecinct: "123g",
      propertyNum: 376,
      propertyStreet: "8C",
      propertyPrice: 18720000,
      propertyType: "Flat",
      propertyDetail:
        "lorem isum jentri kaitan lalala patari jhanno ati pahari",
      propertyImage: "https://picsum.photos/200/323",
      profile_image: "https://picsum.photos/200/235",
      interested: ["malikriaz", "sufyanmallick"],
      comments: [
        {
          id: 1,
          username: "sufyanmallick",
          comment: "bn is the we",
        },
        {
          id: 2,
          username: "malikriaz",
          comment: "we is the bn",
        },
      ],
    },
    {
      id: 3,
      agentname: "pasdfaf",
      propertyPrecinct: "10A",
      propertyNum: 345,
      propertyStreet: "6B",
      propertyPrice: 18720000,
      propertyType: "Villa",
      propertyDetail:
        "It is a corner villa on main road with an amazing view from above the mountain into the kati pahari",
      propertyImage: "https://picsum.photos/200/320",
      profile_image: "https://picsum.photos/200/300",
      interested: ["malikriaz", "sufyanmallick"],
      comments: [
        {
          id: 1,
          username: "sufyanmallick",
          comment: "bn is the we",
        },
        {
          id: 2,
          username: "malikriaz",
          comment: "we is the bn",
        },
      ],
    },
    {
      id: 4,
      agentname: "Shaheer Chohan",
      propertyPrecinct: "2A",
      propertyNum: 12,
      propertyStreet: "4",
      propertyPrice: 1,
      propertyType: "Villa",
      propertyDetail:
        "This is the most exotic Villa you will find in Bahria Town",
      propertyImage: "https://picsum.photos/200/320",
      profile_image: "https://picsum.photos/200/300",
      interested: ["malikriaz", "sufyanmallick"],
      comments: [
        {
          id: 1,
          username: "sufyanmallick",
          comment: "bn is the we",
        },
        {
          id: 2,
          username: "malikriaz",
          comment: "we is the bn",
        },
      ],
    },
    {
      id: 5,
      agentname: "453tsde",
      propertyPrecinct: "10A",
      propertyNum: 345,
      propertyStreet: "6B",
      propertyPrice: 18720000,
      propertyType: "Villa",
      propertyDetail:
        "It is a corner villa on main road with an amazing view from above the mountain into the kati pahari",
      propertyImage: "https://picsum.photos/200/320",
      profile_image: "https://picsum.photos/200/300",
      interested: ["malikriaz", "sufyanmallick"],
      comments: [
        {
          id: 1,
          username: "sufyanmallick",
          comment: "bn is the we",
        },
        {
          id: 2,
          username: "malikriaz",
          comment: "we is the bn",
        },
      ],
    },
  ];

  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Topnavbar navigation={navigation} page2={"MainPage"} />
      <Bottomnavbar navigation={navigation} page={"SearchPage"} />
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.c1}>
            <View style={styles.c2}>
              <FontAwesome5
                name="building"
                style={navbar_icon1}
                onPress={() => navigation.navigate("SearchPage")}
              />
              <Text style={{ fontSize: 15 }}>Search for Property</Text>
            </View>
            <View style={styles.c2}>
              <MaterialCommunityIcons
                name="format-list-checks"
                style={navbar_icon1}
                onPress={() => navigation.navigate("SearchPage")}
              />
              <Text style={{ fontSize: 15 }}>Search for Demand</Text>
            </View>
          </View>
          <TextInput
            placeholder="Search for a deal!"
            style={searchbar}
            onChangeText={(text) => {
              setKeyword(text);
            }}
          />

          {data
            .filter((item) => {
              if (keyword == "") return null;
              else if (
                item.propertyPrecinct
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                item.propertyNum
                  .toString()
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                item.propertyPrice
                  .toString()
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                item.propertyStreet
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                item.propertyType
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                item.propertyDetail
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                item.agentname.toLowerCase().includes(keyword.toLowerCase())
              )
                return item;
            })
            .map((item) => {
              return (
                <SearchCard
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
            })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    //backgroundColor: "#CAEEC2",
    paddingTop: 40,
    paddingBottom: 50,
  },
  c1: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: color.primarycolor,
    alignSelf: "center",
    borderRadius: 20,
    borderColor: color.black,
    borderWidth: 1,
  },
  c2: {
    width: "40%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: color.secondarycolor,
    // alignSelf: "center",
    borderRadius: 20,
    // borderColor: color.black,
    borderWidth: 1,
  },
});
