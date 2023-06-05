import React, { useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("MainPage");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/splashbg.jpg")}
        style={styles.backgroundImage}
      >
        <LottieView
          source={require("../../../assets/your-lottie-animation.json")}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            navigation.navigate("MainPage");
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

export default Splash;
