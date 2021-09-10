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
      <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth * 0.9, height: windowHeight * 0.5 }}
      />
      <Text style={{ fontSize: 24 }}>{data.title}</Text>
      <Text style={{ fontSize: 18 }}>{data.subtitle}</Text>
    </View>
  );
}
