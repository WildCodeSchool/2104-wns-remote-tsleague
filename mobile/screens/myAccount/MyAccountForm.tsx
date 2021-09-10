import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { gql, useMutation } from "@apollo/client";

const ClassroomSchema = yup.object({
  name: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(5, "Veuillez saisir un minimum de 5 caractères"),
  email: yup
    .string()
    .required("Ce champ est obligatoire")
    .email("Veuillez entrer un email")
    .min(5, "Veuillez saisir un minimum de 5 caractères"),
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

const CLASSROOM_MUTATION = gql`
  mutation Chapters {
    chapters {
      id
      number
      title
    }
  }
`;

export default function MyAccountForm({ navigation }: any) {
  return (
    <View>
      <Formik
        initialValues={{
          name: "Johanne",
          email: "johannelee@gmail.com",
          password: "helloworld",
          confirmPassword: "helloworld",
        }}
        validationSchema={ClassroomSchema}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("Mes formateurs");
        }}
      >
        {({ errors, touched, values, handleChange, handleSubmit }) => (
          <View style={globalStyles.container}>
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
            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                value={values.password}
              />
              <Text style={globalStyles.errorText}>{errors.password}</Text>
            </View>
            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.input}
                placeholder="Verification mot de passe"
                secureTextEntry={true}
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
              />
              <Text style={globalStyles.errorText}>
                {errors.confirmPassword}
              </Text>
            </View>
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
