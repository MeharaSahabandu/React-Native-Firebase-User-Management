import React from "react";
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

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.topicReg}>Login</Text><br/><br/>
      <TextInput value="" placeholder="Email" style={[styles.input, styles.inputWidth]} /><br/>
      <TextInput value="" placeholder="Password" style={[styles.input, styles.inputWidth]} /><br/><br/>
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText}><b>Register</b></Text>
      </View><br/>
      <Text style={styles.whiteText}>Don't have an account?</Text><br/>
      <Text style={styles.whiteText}><b>Register</b></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  topicReg: {
    color: "white",
    fontSize: 26,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    padding: 10,
    borderRadius: 10
  },
  inputWidth: {
    width: "80%",
  },
  whiteText: {
    color: "white",
  },
  button: {
    width: "80%",
    backgroundColor: "white",
    height: 50,
    borderRadius: 10, // Add border radius
  },
  buttonText: {
    color: "black",
    alignItems:"center",
    marginTop:"1%",
    textAlign: "center",
    paddingTop: 10,
  },
});
