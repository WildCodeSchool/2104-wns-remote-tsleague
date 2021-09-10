import React from "react";
import { Text, View } from "react-native";
import MyAccountForm from './MyAccountForm';
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs"

type MyAccountNavigationProp = BottomTabScreenProps<{'Mes formateurs': undefined}>;

export default function MyAccountScreen({navigation}: MyAccountNavigationProp) {
    return (
      <View>
        <MyAccountForm navigation={navigation}/>  
      </View>
    );
  }