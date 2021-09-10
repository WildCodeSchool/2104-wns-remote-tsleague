import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { storeData, getData } from "../../utils/localeStorage";

import Slide from "./Slide";

const slideGuide = [
  {
    id: 1,
    title: `Bienvenue sur PixeLearn`,
    subtitle: `Guide d'introduction`,
  },
  // {
  //   id: 1,
  //   title: `Créer un compte d'admin`,
  //   subtitle: `Veuillez contacter l'équipe de PixeLearn pour pouvoir, vous créez un compte.`,
  // },
  {
    id: 2,
    title: `Créer une classe`,
    subtitle: `Renseigner le nom de la classe et les informations nécessaires.`,
  },
  {
    id: 3,
    title: `Rajouter des formateurs`,
    subtitle: `Rajouter des formateurs dans la classe pour guider et enseigner aux  élèves.`,
  },
  {
    id: 4,
    title: `Rajouter des élèves`,
    subtitle: ` Enfin, rajouter des élèves dans la classe `,
  },
  {
    id: 5,
    title: `Rejoignez le jeux`,
    subtitle: `Pour rejoindre votre classe PixeLearn , vous aurez besoin d'avoir accès à un ordinateur pour accéder au site web, connecter ensuite avec vos identifiants pour vous connecter à la classe. Félicitations, vous avez terminé la création de votre classe.`,
  },
];

export default function Carousel() {
  const [modalVisible, setModalVisible] = useState(false);
  const value = getData();

  if (value !== null) {
    value
      .then((res) => {
        if (res === null) {
          storeData();
          setModalVisible(true);
        }
      })
      .catch((err) => alert(err.toString()));
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={slideGuide}
              style={styles.carousel}
              renderItem={({ item }) => {
                return <Slide data={item} />;
              }}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              initialNumToRender={0}
              maxToRenderPerBatch={1}
              removeClippedSubviews={true}
              keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fermer le guide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Guide d'introduction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#80B2D4",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  carousel: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
