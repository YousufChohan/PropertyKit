import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React from "react";
import logo from "../../../../assets/logo.png";
import bgg from "../../../../assets/bgg.jpg";
import { NavigationContainer } from "@react-navigation/native";
import {
  containerFull,
  containerFulll,
  hr80,
  logo1,
} from "../../../commoncss/PageCSS";
import {
  formButton,
  formHead,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from "../../../commoncss/FormCSS";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-community/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    if (email == "" || password == "") {
      alert("Please enter your Email and password");
    } else {
      setLoading(true);
      fetch("http://192.168.43.73:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.error) {
            setLoading(false);
            alert(data.error);
          } else if (data.message == "Successfully Signed In!!") {
            setLoading(false);
            await AsyncStorage.setItem("user", JSON.stringify(data));
            navigation.navigate("MainPage", { data });
          }
        })
        .catch((err) => {
          setLoading(false);
          alert(err);
        });
    }
    // navigation.navigate('MainPage')
  };
  return (
    <LinearGradient
      colors={["#3a95ff", "#a8e5f9", "#E5FFFD"]}
      style={styles.LinearGradient}
    >
      <View style={containerFulll}>
        <Image source={logo} style={logo1} />
        {/* <Image source={bgg} style={bgg} /> */}

        <Text style={formHead}>Login</Text>
        <TextInput
          placeholder="Enter your Email"
          style={formInput}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Enter your Pass"
          style={formInput}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Text
          style={formTextLinkRight}
          onPress={() => navigation.navigate("ForgotPassword_Email")}
        >
          Forgot Password?
        </Text>
        {/* <Text
          style={formButton}
          onPress={() => navigation.navigate("MainPage")}
        >
          Submit
        </Text> */}
        {loading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <Text style={formButton} onPress={() => handleLogin()}>
            Submit
          </Text>
        )}

        <View style={hr80}></View>

        <Text style={formTextLinkCenter}>
          Do not have an account?{" "}
          <Text
            style={{ fontWeight: "bold", color: "black" }}
            onPress={() => navigation.navigate("Signup_Email")}
          >
            Sign-up
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
  },
});
