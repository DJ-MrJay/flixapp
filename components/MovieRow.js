import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from "react-native";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovieData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {movies.map((movie, index) => (
          <Pressable
            key={index}
            style={[
              styles.movieContainer,
              { marginRight: index < movies.length - 1 ? 20 : 0 },
            ]}
          >
            <Image
              style={styles.movieImage}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 20,
  },
  movieContainer: {
    marginRight: 20,
  },
  movieImage: {
    width: 100,
    height: 170,
    borderRadius: 5,
    resizeMode: "cover",
  },
});

export default MovieRow;
