import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
// import { Image } from "react-native-elements";
import { MovieItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const API_KEY = "0834383573949979b4c460ece7f6f494";

const Header = () => {
  const { profile, setProfile } = useContext(MovieItems);
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const movieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();

        // Ensure data.results is not empty before setting movies
        if (data.results && data.results.length > 0) {
          const randomMovie =
            data.results[Math.floor(Math.random() * data.results.length - 1)];
          setMovies(randomMovie);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    movieData();
  }, []);

  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 600, position: "relative" }}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}`,
        }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Overlay transparency
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <View style={{}}>
            <Image
              style={{
                height: 40,
                aspectRatio: 3.5,
                resizeMode: "contain",
              }}
              source={require("../assets/images/Netflix_Logo.png")}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Feather name="search" size={35} color="white" />

            <Pressable
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                style={{ width: 35, height: 35, borderRadius: 3 }}
                source={{ uri: profile.image }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            TV Shows
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Movies
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Categories
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <View style={{ width: "25%" }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              My List
            </Text>
          </View>
        </View>

        <View style={{ width: "50%", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 5,
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
              width: 150,
            }}
          >
            <Feather name="play" size={24} color="black" />
            <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
              Play
            </Text>
          </View>
        </View>

        <View style={{ width: "25%" }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="white"
            />
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Info
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
