import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MovieItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { API_KEY } from "@env";

const Header = () => {
  const { profile } = useContext(MovieItems);
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const randomMovie =
            data.results[Math.floor(Math.random() * data.results.length - 1)];
          setMovies(randomMovie);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}`,
        }}
      >
        <View style={styles.overlay} />

        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/images/Netflix_Logo.png")}
            />
          </View>

          <View style={styles.iconsContainer}>
            <Feather name="search" size={30} color="white" />

            <Pressable onPress={() => navigation.navigate("Profile")}>
              <Image
                style={styles.profileImage}
                source={{ uri: profile.image }}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoryText}>TV Shows</Text>
          <Text style={styles.categoryText}>Movies</Text>
          <Text style={styles.categoryText}>Categories</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomItem1}>
          <View style={styles.iconTextContainer}>
            <AntDesign name="plus" size={24} color="white" />
            <Text style={styles.iconText}>My List</Text>
          </View>
        </View>

        <View style={styles.bottomItem2}>
          <View style={styles.playButton}>
            <Feather name="play" size={24} color="black" />
            <Text style={styles.playButtonText}>Play</Text>
          </View>
        </View>

        <View style={styles.bottomItem3}>
          <View style={styles.iconTextContainer}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="white"
            />
            <Text style={styles.iconText}>Info</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 600,
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  logoContainer: {},
  logo: {
    height: 35,
    aspectRatio: 3.5,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 3,
  },
  categoriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  categoryText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  bottomItem1: {
    width: "25%",
    alignItems: "center",
  },
  bottomItem2: {
    width: "50%",
    alignItems: "center",
  },
  bottomItem3: {
    width: "25%",
    alignItems: "center",
  },
  iconTextContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  playButtonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Header;
