import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async () => {
  try {
    await AsyncStorage.setItem("@hide_guide", "yes");
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@hide_guide");
    return value;
  } catch (e) {
    console.log(e);
  }
};

export { storeData, getData };
