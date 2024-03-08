import React, { useContext } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { MovieItems } from "../Context";
import { useLayoutEffect } from "react";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { profile, setProfile } = useContext(MovieItems);

  const profileNames = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU",
      name: "Mr Jay",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU",
      name: "Pendo",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU",
      name: "Alana",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU",
      name: "Taraji",
    },
  ];

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.header}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerText}>Profiles and more</Text>
      </Pressable>

      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/Netflix_Logo.png")}
        />
      </View>

      <View style={styles.profilesContainer}>
        <Text style={styles.profilesHeading}>Who's Watching?</Text>

        <FlatList
          numColumns={2}
          data={profileNames}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setProfile(item);
                navigation.navigate("Loading");
              }}
              style={styles.profileItem}
            >
              <Image style={styles.profileImage} source={{ uri: item.image }} />
              <Text style={styles.profileName}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>

      <Pressable onPress={signOutUser}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    height: 40,
    resizeMode: "contain",
  },
  profilesContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  profilesHeading: {
    color: "gray",
    fontSize: 16,
    fontWeight: "600",
  },
  profileItem: {
    marginHorizontal: 10,
    padding: 20,
    marginTop: 10,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 7,
    resizeMode: "contain",
  },
  profileName: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
  },
  signOutText: {
    fontSize: 18,
    textAlign: "center",
    color: "gray",
    marginTop: 15,
  },
});

export default ProfileScreen;
