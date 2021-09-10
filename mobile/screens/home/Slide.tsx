import React from "react";
import { Text, View, Image, Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Slide({ data }: any) {
  return (
    <View
      style={{
        width: windowWidth - 80,
        height: windowHeight - 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, margin: 10 }}>{data.title}</Text>
      <Text style={{ fontSize: 18 }}>{data.subtitle}</Text>
    </View>
  );
}
