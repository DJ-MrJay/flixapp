import {
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { signInWithCustomToken, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovieItems } from "../Context";
import Header from "../components/Header";
import Trending from "../components/Trending";
import { ScrollView } from "react-native";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <ScrollView>
        <Header />
        <Trending />
        <Movies />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
