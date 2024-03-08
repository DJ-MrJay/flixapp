import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { API_KEY } from "@env";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovieData();
  }, []);

  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false}>
      {movies.slice(0, 10).map((movie, id) => (
        <Pressable
          key={id}
          style={styles.movieContainer}
        >
          <Text style={styles.rank}>{id + 1}</Text>
          <Image
            style={styles.movieImage}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
            }}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    flexDirection: "row",
    marginRight: 20,
  },
  rank: {
    fontSize: 85,
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    zIndex: 5,
    bottom: -20,
    left: -10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  movieImage: {
    width: 100,
    height: 170,
    borderRadius: 5,
    resizeMode: "cover",
  },
});

export default Trending;
