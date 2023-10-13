import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {collection, doc, getDoc,updateDoc} from "firebase/firestore";
import { db } from "./config.jsx";
import Toast from "react-native-toast-message";
export default function Profile() {
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
  const handleUpdate = () => {
    updateDoc(doc(db, "users", "AJ9Gdgl68XcI5lboIW8J"), {
      name: name,
      email: email,
      phone: phone,
    })
      .then(() => {
        showToast("User Details Updated Successfully");
      })
      .catch((error) => {
        console.error("Error updating user data: ", error);
      });
  };
  const showToast = (message) => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: message,
      visibilityTime: 3000,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.topicReg}>
        <b>{name}</b>
      </Text><br /> <br /> <br /> <br /><br />
      <TextInput
        value={name}
        placeholder="Name"
        onChangeText={setName}
        style={[styles.input, styles.inputWidth]}
      /> <br /> <br />
      <TextInput
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        style={[styles.input, styles.inputWidth]}
      />
      <br /><br />
      <TextInput
        value={phone}
        placeholder="Phone Number"
        onChangeText={setPhone}
        style={[styles.input, styles.inputWidth]}
      /> <br /> <br />
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
