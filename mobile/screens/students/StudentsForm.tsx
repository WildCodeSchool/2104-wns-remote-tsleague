import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import * as yup from "yup";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs"

const StudentsSchema = yup.object({
  name: yup.string()
  .required('Ce champ est obligatoire')
  .min(5),
  email: yup.string()
  .required('Ce champ est obligatoire')
  .email('Veuillez entrer un email')
  .min(5),
})


export default function StudentsForm({navigation}:any) {
  return (
    <View>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={StudentsSchema}
        onSubmit={(values) => {
          navigation.navigate('Mon compte')
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Nom"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Mail"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            />

            <Button color="blue" title="Suivant" onPress={() => props.handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
}
