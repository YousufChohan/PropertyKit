import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login-signup/login/Login";
import Signup_Email from "./src/screens/login-signup/signup/Signup_Email";
import Signup_Username from "./src/screens/login-signup/signup/Signup_Username";
import Signup_Password from "./src/screens/login-signup/signup/Signup_Password";
import Signup_AccountCreated from "./src/screens/login-signup/signup/Signup_AccountCreated";
import Signup_Verify from "./src/screens/login-signup/signup/Signup_Verify";
import ForgotPassword_Email from "./src/screens/login-signup/forgotpassword/ForgotPassword_Email";
import ForgotPassword_Verification from "./src/screens/login-signup/forgotpassword/ForgotPassword_Verification";
import ForgotPassword_Password from "./src/screens/login-signup/forgotpassword/ForgotPassword_Password";
import ForgotPassword_AccountRecovered from "./src/screens/login-signup/forgotpassword/ForgotPassword_AccountRecovered";
import MainPage from "./src/screens/mainpage/MainPage";
import All_Chats from "./src/screens/chat/All_Chats";
import SearchPage from "./src/screens/mainpage/SearchPage";
import Requirement from "./src/screens/mainpage/Requirement";
import MyProfile from "./src/screens/profile/MyProfile";
import NotificationPage from "./src/screens/mainpage/NotificationPage";
import Settings1 from "./src/screens/settings/Settings1";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup_Email" component={Signup_Email} />
        <Stack.Screen name="Signup_Verify" component={Signup_Verify} />
        <Stack.Screen name="Signup_Username" component={Signup_Username} />
        <Stack.Screen name="Signup_Password" component={Signup_Password} />
        <Stack.Screen
          name="Signup_AccountCreated"
          component={Signup_AccountCreated}
        />
        <Stack.Screen
          name="ForgotPassword_Email"
          component={ForgotPassword_Email}
        />
        <Stack.Screen
          name="ForgotPassword_Verification"
          component={ForgotPassword_Verification}
        />
        <Stack.Screen
          name="ForgotPassword_Password"
          component={ForgotPassword_Password}
        />
        <Stack.Screen
          name="ForgotPassword_AccountRecovered"
          component={ForgotPassword_AccountRecovered}
        />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen
          name="All_Chats"
          component={All_Chats}
          options={{
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{
            animation: "none",
          }}
        />
        <Stack.Screen
          name="Requirement"
          component={Requirement}
          options={{
            animation: "none",
          }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            animation: "none",
          }}
        />
        <Stack.Screen
          name="NotificationPage"
          component={NotificationPage}
          options={{
            animation: "flip",
          }}
        />
        <Stack.Screen
          name="Settings1"
          component={Settings1}
          options={{
            animation: "slide_from_bottom",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
