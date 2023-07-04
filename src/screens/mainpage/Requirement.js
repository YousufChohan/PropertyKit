import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { containerFull } from "../../commoncss/PageCSS";
import { formHead } from "../../commoncss/FormCSS";
import Bottomnavbar from "../../components/Bottomnavbar";
import Topnavbar from "../../components/Topnavbar";
import PropertyPost from "../../components/PropertyPost";
import RequirementPost from "../../components/RequirementPost";
import { SafeAreaView } from "react-native-safe-area-context";

const Requirement = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Topnavbar
        navigation={navigation}
        page={"Requirement"}
        page2={"MainPage"}
      />
      <Bottomnavbar navigation={navigation} page={"Requirement"} />
      <RequirementPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default Requirement;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    //backgroundColor: "#CAEEC2",
    paddingTop: 75,
    paddingBottom: 50,
  },
});
