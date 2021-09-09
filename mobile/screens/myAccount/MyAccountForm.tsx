import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";

const ClassroomSchema = yup.object({
  name: yup.string().required("Ce champ est obligatoire").min(5),
  email: yup
    .string()
    .required("Ce champ est obligatoire")
    .email("Veuillez entrer un email")
    .min(5),
  password: yup.string().required("Ce champ est obligatoire"),
  confirmPassword: yup
    .string()
    .test(
      "passwords-match",
      "Les mots de passe ne sont pas les mêmes!",
      function (value) {
        return this.parent.password === value;
      }
    )
    .required("Ce champ est obligatoire"),
});

export default function MyAccountForm({ navigation }: any) {
  return (
    <View>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={ClassroomSchema}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("Mes formateurs");
        }}
      >
        {({ errors, touched, values, handleChange, handleSubmit }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Nom"
              onChangeText={handleChange("name")}
              value={values.name}
            />
            {/* <View>{errors.name}</View> */}
            <TextInput
              style={globalStyles.input}
              placeholder="Mail"
              onChangeText={handleChange("email")}
              value={values.email}
            />
            {/* <View>{errors.email}</View> */}
            <TextInput
              style={globalStyles.input}
              placeholder="Mot de passe"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              value={values.password}
            />
            {/* <View>{errors.password}</View> */}

            <TextInput
              style={globalStyles.input}
              placeholder="Verification mot de passe"
              secureTextEntry={true}
              onChangeText={handleChange("confirmPassword")}
              value={values.confirmPassword}
            />
            {/* <View>{errors.confirmPassword}</View> */}

            <Button
              color="blue"
              title="Suivant"
              onPress={() => handleSubmit()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
