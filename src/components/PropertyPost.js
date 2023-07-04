import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PropertyPost_Card from "../cards/PropertyPost_Card";
import SearchCard from "../cards/SearchCard";
import { color, ipAddress } from "../commoncss/color";
import { useFocusEffect } from "@react-navigation/native";

const PropertyPost = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getAllProperties = () => {
    fetch(color.ipAddress + "/searchUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword: "" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setData([]);
        } else {
          const newData = [
            ...data.user.map((el) => {
              return [...el.posts];
            }),
          ].flat();
          setData(newData);
          console.log(newData);
        }
      })
      .catch((err) => {
        setData([]);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      getAllProperties();
      return () => {
        // Clean up any necessary resources or listeners
      };
    }, [])
  );

  //console.log(data[0].agentname);
  return (
    <ScrollView style={styles.container}>
      {data?.reverse().map((item) => {
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
  );
};

export default PropertyPost;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
});
