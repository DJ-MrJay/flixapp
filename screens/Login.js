import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const signIn = () => {
    signInWithEmailAndPassword(auth, input, password).then(
      (userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        console.log("Logged in as ", user.email);
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/Netflix_Logo.png")}
        />
      </View>

      <KeyboardAvoidingView style={styles.keyboardContainer}>
        <View>
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholder="Email or phone number"
            placeholderTextColor="white"
            style={styles.input}
          />

          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="white"
            style={styles.input}
          />
        </View>

        <Pressable
          onPress={() =>
            navigation.navigate("Register", {
              email: input,
              password: password,
            })
          }
          style={[
            styles.signInButton,
            {
              backgroundColor: password.length > 4 ? "red" : "transparent",
              borderColor: password.length > 4 ? "red" : "white",
            },
          ]}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </Pressable>

        <Text style={styles.forgotPassword}>Forgot password?</Text>

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUp}>New to Netflix? Sign up now.</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    height: 35,
    resizeMode: "contain",
  },
  keyboardContainer: {
    justifyContent: "center",
    flex: 1,
  },
  input: {
    padding: 15,
    borderRadius: 5,
    color: "white",
    backgroundColor: "gray",
    marginBottom: 20,
    fontSize: 17,
  },
  signInButton: {
    paddingVertical: 12,
    borderWidth: 2,
    borderRadius: 5,
  },
  signInButtonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
  forgotPassword: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    marginTop: 30,
  },
  signUp: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    marginTop: 30,
  },
});

export default LoginScreen;
