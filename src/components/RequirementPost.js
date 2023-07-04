import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PropertyPost_Card from "../cards/PropertyPost_Card";
import RequirementPost_Card from "../cards/RequirementPost_Card";
import { useFocusEffect } from "@react-navigation/native";
import { color, ipAddress } from "../commoncss/color";
import { LinearGradient } from "expo-linear-gradient";

const RequirementPost = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getAllDemands = () => {
    fetch(color.ipAddress + "/searchDemand", {
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
            ...data.demands.map((el) => {
              return [...el.demands];
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
      getAllDemands();
      return () => {
        // Clean up any necessary resources or listeners
      };
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      {data?.reverse().map((item) => {
        return (
          <RequirementPost_Card
            navigation={navigation}
            key={item._id}
            agentname={item.username}
            agentemail={item.email}
            demandPrecinct={item.demandprecinct}
            demandNum={item.demandnum}
            demandStreet={item.demandstreet}
            demandPrice={item.demandprice}
            demandType={item.demandtype}
            demandDetail={item.demanddetail}
            profileImage={item.profilepic}
            interested={item.likes}
            comments={item.comments}
          />
        );
      })}
    </ScrollView>
  );
};

export default RequirementPost;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
});
