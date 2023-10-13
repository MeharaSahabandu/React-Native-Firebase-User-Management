import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config.jsx";
import Toast from "react-native-toast-message";

export default function Profile() {
  const [name, setName] = useState("Mehara");
  const [email, setEmail] = useState("mhr@gmail.com");
  const [phone, setPhone] = useState("0412225698");

  const handleUpdate = () => {
    // Your update logic here
    updateDoc(doc(db, "users", "AJ9Gdgl68XcI5lboIW8J"), {
      name: name,
      email: email,
      phone: phone,
    })
      .then(() => {
        console.log("User Details Updated Successfully");
        showToast("User Details Updated Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showToast = (message) => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: message,
      visibilityTime: 3000, // 3 seconds
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topicReg}>John Doe</Text>
      <br />
      <br />
      <br />
      <br />
      <br />
      <TextInput
        value={name}
        placeholder="Name"
        onChangeText={setName}
        style={[styles.input, styles.inputWidth]}
      />
      <br />
      <TextInput
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        style={[styles.input, styles.inputWidth]}
      />
      <br />
      <TextInput
        value={phone}
        placeholder="Phone Number"
        onChangeText={setPhone}
        style={[styles.input, styles.inputWidth]}
      />
      <br />
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText} onPress={handleUpdate}>
          <b>Save Changes</b>
        </Text>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 0,
  },
  topicReg: {
    color: "black",
    fontSize: 30,
    marginTop: "-65%",
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    color: "black",
    padding: 10,
    borderRadius: 10,
  },
  inputWidth: {
    width: "80%",
  },
  whiteText: {
    color: "black",
  },
  button: {
    width: "80%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    marginTop: "1%",
    textAlign: "center",
    paddingTop: 10,
  },
});
