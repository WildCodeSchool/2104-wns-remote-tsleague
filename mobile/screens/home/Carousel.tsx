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

const slideList = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title! ${i + 1}`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

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
              data={slideList}
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
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
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
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
