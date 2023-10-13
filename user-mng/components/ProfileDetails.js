import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config.jsx";
import Toast from "react-native-toast-message";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProfileDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const route = useRoute(); 
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

  useEffect(() => {
    if (route.params?.fromProfile) {
      showProfileUpdatedToast();
    }
  }, [route.params]);

  const showProfileUpdatedToast = () => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Profile Updated",
      visibilityTime: 3000,
      onShow: () => {
        window.location.reload();
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topicReg}>
        <b>Hi, {name}</b>
      </Text><br/><br/>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          style={[styles.input, styles.inputWidth]}
          editable={false} 
          selectable={false} 
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          style={[styles.input, styles.inputWidth]}
          editable={false} 
          selectable={false} 
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          value={phone}
          style={[styles.input, styles.inputWidth]}
          editable={false} 
          selectable={false} 
        />
      </View><br/><br/>
      <View style={[styles.button, styles.inputWidth]}>
        <Text onPress={() => navigation.navigate("Profile")} style={styles.buttonText}>
          <b>Edit Profile Data</b>
        </Text>
      </View>
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText} >
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
    marginTop: 30,
  },
  label: {
    color: "black",
    width: 120,
  },
  topicReg: {
    color: "black",
    fontSize: 30,
    
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
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingTop: 10,
  },
});
