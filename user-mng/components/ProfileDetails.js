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
      <br /> <br />
      <TextInput
        value={name}
        placeholder="Name"
        style={[styles.input, styles.inputWidth]}
        editable={false} // Make the field non-editable
        selectable={false} // Disable cursor and selection
      />
      <br /> <br />
      <TextInput
        value={email}
        placeholder="Email"
        style={[styles.input, styles.inputWidth]}
        editable={false} // Make the field non-editable
        selectable={false} // Disable cursor and selection
      />
      <br /> <br />
      <TextInput
        value={phone}
        placeholder="Phone Number"
        style={[styles.input, styles.inputWidth]}
        editable={false} // Make the field non-editable
        selectable={false} // Disable cursor and selection
      />
      <br /> <br />
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
  image: {
    width: 50,
    height: 0,
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
