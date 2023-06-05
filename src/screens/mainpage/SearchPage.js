import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
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
  let datta = [
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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getallproperties = async () => {
    if (keyword.length > 0) {
      setLoading(true);
      fetch("http://10.0.2.2:3000/searchUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: keyword }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setData([]);
            setError(data.error);
            setLoading(false);
          } else {
            setError(null);
            setData(
              [
                ...data.user.map((el, i) => {
                  return [...el.posts];
                }),
              ].flat()
            );
            console.log(
              [
                ...data.user.map((el, i) => {
                  return [...el.posts];
                }),
              ].flat()
            );
            setLoading(false);
          }
        })
        .catch((err) => {
          setData([]);
          setLoading(false);
        });
    } else {
      setData([]);
      setError(null);
    }
  };

  useEffect(() => {
    getallproperties();
  }, [keyword]);

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
            ?.filter((item) => {
              // console.log(item);
              if (keyword == "") return null;
              else if (
                item?.propertyprecinct
                  ?.toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                item?.propertynum
                  ?.toString()
                  ?.toLowerCase()
                  ?.includes(keyword.toLowerCase()) ||
                item?.propertyprice
                  ?.toString()
                  ?.toLowerCase()
                  ?.includes(keyword.toLowerCase()) ||
                item?.propertystreet
                  ?.toLowerCase()
                  ?.includes(keyword.toLowerCase()) ||
                item?.propertytype
                  ?.toLowerCase()
                  ?.includes(keyword.toLowerCase()) ||
                item?.propertydetail
                  ?.toLowerCase()
                  ?.includes(keyword.toLowerCase()) ||
                item?.username?.toLowerCase().includes(keyword.toLowerCase())
              )
                return item;
            })
            .map((item) => {
              return (
                <SearchCard
                  navigation={navigation}
                  key={item._id}
                  agentname={item.username}
                  agentemail={item.email}
                  propertyPrecinct={item.propertyprecinct}
                  propertyNum={item.propertynum}
                  propertyStreet={item.propertystreet}
                  propertyPrice={item.propertyprice}
                  propertyType={item.propertytype}
                  propertyDetail={item.propertydetail}
                  propertyImage={item.post}
                  profileImage={item.profilepic}
                  interested={item.likes}
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
