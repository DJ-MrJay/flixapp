import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}
    >
      <View style={{ alignItems: "center", margin: 20 }}>
        <Image
          style={{
            height: 40,
            resizeMode: "contain",
          }}
          source={require("../assets/images/Netflix_Logo.png")}
        />
      </View>
      <KeyboardAvoidingView
        style={{
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <Input
            value={input}
            onChangeText={(text) => setInput(text)}
            type="email"
            placeholder="Email or phone number"
            placeholderTextColor="white"
            inputContainerStyle={{
              borderBottomWidth: 0,
              width: 360,
            }}
            inputStyle={{
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />

          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="white"
            inputContainerStyle={{
              borderBottomWidth: 0,
              width: 360,
            }}
            inputStyle={{
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />
        </View>

        <TouchableOpacity
          style={
            password.length > 4
              ? {
                  alignSelf: "center",
                  width: 360,
                  paddingVertical: 12,
                  backgroundColor: "red",
                  borderColor: "red",
                  borderWidth: 2,
                  borderRadius: 5,
                }
              : {
                  alignSelf: "center",
                  width: 360,
                  paddingVertical: 12,
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 5,
                }
          }
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "white",
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Forgot password?
        </Text>

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              color: "white",
              textAlign: "center",
              marginTop: 30,
            }}
          >
            New to Netflix? Sign up now.
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
