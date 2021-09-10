import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Slide({ data }: any) {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: windowWidth - 80,
    height: windowHeight - 80,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 24, margin: 10 },
  subtitle: { fontSize: 18 },
});
