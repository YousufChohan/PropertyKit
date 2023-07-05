import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { color } from "../commoncss/color";

const Toast = ({ message }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10000,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    // backgroundColor: "rgba(0, 0, 0, 0.7)",
    backgroundColor: color.black,
    borderRadius: 8,
    padding: 16,
  },
  message: {
    color: color.secondarycolor2,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Toast;
