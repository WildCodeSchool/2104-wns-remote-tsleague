import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Form, Formik } from "formik";
import * as yup from "yup";

const MyTeachersSchema = yup.object({
  name: yup.string()
  .required()
  .min(5),
  email: yup.string()
  .required()
  .min(5),
})

export default function MyAccountForm() {
  return (
    <View>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={MyTeachersSchema}
        onSubmit={(values) => {}}
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

            <Button color="blue" title="Suivant" onPress={() => props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
