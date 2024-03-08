import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigateToHome = setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);

    return () => clearTimeout(navigateToHome);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.loadingText}>Loading</Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Loading;
