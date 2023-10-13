import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config.jsx";
import Toast from "react-native-toast-message";

export default function ProfileDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", "AJ9Gdgl68XcI5lboIW8J");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setName(userData.name);
          setEmail(userData.email);
          setPhone(userData.phone);
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.topicReg}>
        <b>{name}</b>
      </Text>
      <br /> <br /><br/><br/>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          style={[styles.input, styles.inputWidth]}
          editable={false} 
          selectable={false} 
        />
      </View><br/>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          style={[styles.input, styles.inputWidth]}
          editable={false} 
          selectable={false} 
        />
      </View><br/>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          value={phone}
          style={[styles.input, styles.inputWidth]}
          editable={false} 
          selectable={false} 
        />
      </View><br/>
      <br /><br/>
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText}>
          <b>Edit Profile Data</b>
        </Text>
      </View>
      <br />
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText}>
          <b>Delete Profile</b>
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
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "black",
    width: 120, 
  },
  topicReg: {
    color: "black",
    fontSize: 30,
    marginTop: "-35%",
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
