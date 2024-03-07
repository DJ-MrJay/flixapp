import { Text, View, Pressable, Image, FlatList } from "react-native";
import React, { useContext } from "react";
import { signInWithCustomToken, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovieItems } from "../Context";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { profile, setProfile } = useContext(MovieItems);
  console.log("Selected profile is ", profile);
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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginLeft: 20,
          }}
        >
          Profiles and more
        </Text>
      </Pressable>

      <View
        style={{
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Image
          style={{
            height: 40,
            resizeMode: "contain",
          }}
          source={require("../assets/images/Netflix_Logo.png")}
        />
      </View>

      <View style={{ marginTop: 50, alignItems: "center" }}>
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
          Who's Watching?
        </Text>

        <FlatList
          numColumns={2}
          data={profileNames}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setProfile(item);
                navigation.navigate("Loading");
              }}
              style={{ marginHorizontal: 10, padding: 20, marginTop: 10 }}
            >
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 7,
                  resizeMode: "contain",
                }}
                source={{ uri: item.image }}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 15,
                  fontWeight: "500",
                  marginTop: 10,
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>

      <Pressable onPress={signOutUser}>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "gray",
            marginTop: 15,
          }}
        >
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;
