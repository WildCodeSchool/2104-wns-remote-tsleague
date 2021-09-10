import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

const StudentsSchema = yup.object({
  name: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(5, "Veuillez saisir un minimum de 5 caractères"),
  email: yup
    .string()
    .required("Ce champ est obligatoire")
    .email("Veuillez entrer un email")
    .min(5, "Veuillez saisir un minimum de 5 caractères"),
});

export default function StudentsForm({ navigation }: any) {
  return (
    <View>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={StudentsSchema}
        onSubmit={(values) => {}}
      >
        {({ errors, touched, values, handleChange, handleSubmit }) => (
          <View>
            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.input}
                placeholder="Nom"
                onChangeText={handleChange("name")}
                value={values.name}
              />
              <Text style={globalStyles.errorText}>{errors.name}</Text>
            </View>
            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.input}
                placeholder="Mail"
                onChangeText={handleChange("email")}
                value={values.email}
              />
              <Text style={globalStyles.errorText}>{errors.email}</Text>
            </View>
            <Button
              color="gray"
              title="AJOUTER UN ÉLÈVE"
              onPress={() => handleSubmit()}
            />

            <Button
              color="blue"
              title="CRÉER LA CLASSE"
              onPress={() => navigation.navigate("Acceuil")}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
