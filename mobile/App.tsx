import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import HomeScreen from "./screens/home/HomeScreen";
import MyTeachersScreen from "./screens/myTeachers/MyTeachersScreen";
import MyAccountScreen from "./screens/myAccount/MyAccountScreen";
import StudentsScreen from "./screens/students/StudentsScreen";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: "https://api.graphql.guide/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Acceuil" component={HomeScreen} />
          <Stack.Screen name="Mon compte" component={MyAccountScreen} />
          <Stack.Screen name="Mes formateurs" component={MyTeachersScreen} />
          <Stack.Screen name="Les élèves" component={StudentsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
