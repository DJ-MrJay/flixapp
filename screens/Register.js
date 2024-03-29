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
import { AntDesign } from "@expo/vector-icons";

const RegisterScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("Login", { email: input, password: password });
  };

  const handleRegisterPress = () => {
    navigation.navigate("Plans", { email: input, password: password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/Netflix_Logo.png")}
          />
        </View>

        <AntDesign name="arrowright" size={24} color="transparent" />
      </View>
      <KeyboardAvoidingView style={styles.keyboardContainer}>
        <Text style={styles.heading}>Ready to watch?</Text>

        <Text style={styles.subheading}>
          Enter your email and password to create an account.
        </Text>

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
          disabled={!input && !password}
          onPress={handleRegisterPress}
          style={[
            styles.registerButton,
            {
              backgroundColor: password.length > 4 ? "red" : "transparent",
              borderColor: password.length > 4 ? "red" : "white",
            },
          ]}
        >
          <Text style={styles.registerButtonText}>Register</Text>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 40,
    resizeMode: "contain",
  },
  keyboardContainer: {
    justifyContent: "center",
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: "500",
    color: "white",
    marginBottom: 30,
  },
  subheading: {
    fontSize: 17,
    fontWeight: "400",
    color: "white",
    marginBottom: 30,
  },
  input: {
    padding: 15,
    borderRadius: 5,
    color: "white",
    backgroundColor: "gray",
    marginBottom: 20,
    fontSize: 17,
  },
  registerButton: {
    paddingVertical: 12,
    borderWidth: 2,
    borderRadius: 5,
  },
  registerButtonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
});

export default RegisterScreen;
