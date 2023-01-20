import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import Bottomnavbar from "../../components/Bottomnavbar";
import TopNavbar from "../../components/Topnavbar";
import PropertyPost from "../../components/PropertyPost";
import { color } from "../../commoncss/color";
import { SafeAreaView } from "react-native-safe-area-context";

const NotificationPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} />
      <Bottomnavbar navigation={navigation} page={"NotificationPage"} />
      <ScrollView style={styles.c1}>
        <View style={styles.notification}>
          <Text>First Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Second Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Third Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
        <View style={styles.notification}>
          <Text>Some Notification</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: color.white,
    // paddingVertical: 300,
  },
  c1: {
    width: "100%",
    height: "100%",
    // alignItems: "center",
  },
  notification: {
    width: "98%",
    height: 50,
    backgroundColor: color.primarycolor,
    marginTop: 10,
  },
});
