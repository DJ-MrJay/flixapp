import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "centre",
      }}
    >
      <View>
        <Text>Loading</Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
