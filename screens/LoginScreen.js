import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image } from "@rneui/base";
import { Input } from "@rneui/themed";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={-100}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://signal.org/assets/header/logo-f7ef605fe417d5520d38d546b3b774b4261c75220b9904da4d8b2ffc19a761ff.png",
        }}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>

      <Button containerStyle={styles.button} title="Login" onPress={signIn} />
      <Button
        containerStyle={styles.button}
        type="outline"
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
