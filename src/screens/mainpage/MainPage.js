import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { containerFull } from "../../commoncss/PageCSS";
import { formHead } from "../../commoncss/FormCSS";
import Bottomnavbar from "../../components/Bottomnavbar";
import Topnavbar from "../../components/Topnavbar";
import PropertyPost from "../../components/PropertyPost";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainPage = ({ navigation }) => {
  const [userdata, setUserdata] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((data) => {
        console.log("async userdata ", data);
        setUserdata(JSON.parse(data));
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="lighst-content" />
      <Topnavbar navigation={navigation} page={"MainPage"} page2={"MainPage"} />
      <Bottomnavbar navigation={navigation} page={"MainPage"} />
      <PropertyPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    //backgroundColor: "#CAEEC2",
    paddingTop: 60,
    paddingBottom: 50,
  },
});
