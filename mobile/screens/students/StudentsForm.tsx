import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

const StudentsSchema = yup.object({
  name: yup.string().required("Ce champ est obligatoire").min(5),
  email: yup
    .string()
    .required("Ce champ est obligatoire")
    .email("Veuillez entrer un email")
    .min(5),
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
              {/* <View>{errors.name}</View> */}
            </View>
            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.input}
                placeholder="Mail"
                onChangeText={handleChange("email")}
                value={values.email}
              />
              {/* <View>{errors.email}</View> */}
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
