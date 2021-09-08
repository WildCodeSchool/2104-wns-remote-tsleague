import React from "react";
import { Text, View } from "react-native";
import MyAccountForm from './MyAccountForm';

export default function MyAccountScreen({navigation}: any) {
    return (
      <View>
        <MyAccountForm navigation={navigation}/>  
      </View>
    );
  }