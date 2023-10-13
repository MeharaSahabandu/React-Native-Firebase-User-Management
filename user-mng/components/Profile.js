import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native"; // Import Image
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config.jsx";
import bck from "../assets/bck.png"; // Import your image

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image source={bck} style={styles.image} /> {/* Add Image */}
      <Text style={styles.topicReg}>John Doe</Text><br/><br/><br/><br/><br/>
      <TextInput value="" placeholder="Name" style={[styles.input, styles.inputWidth]} /><br/>
      <TextInput value="" placeholder="Email" style={[styles.input, styles.inputWidth]} /><br/>
      <TextInput value="" placeholder="Phone Number" style={[styles.input, styles.inputWidth]} /><br/>
      <TextInput value="" placeholder="Password" style={[styles.input, styles.inputWidth]} /><br/><br/>
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText}><b>Save Changes</b></Text>
      </View>
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
    width: 50, // Set the image width
    height: 0, // Set the image height
  },
  topicReg: {
    color: "black",
    fontSize: 30,
    marginTop: "-65%"
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    color: "black", 
    padding: 10,
    borderRadius: 10
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
