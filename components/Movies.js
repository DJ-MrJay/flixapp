import { StyleSheet, Text, View } from "react-native";
import React from "react";
import movieUrls from "../data/movieUrls";
import MovieRow from "./MovieRow";

const Movies = () => {
  const data = movieUrls;

  return (
    <View>
      {data.map((movie) => (
        <MovieRow title={movie.name} url={movie.url} />
      ))}
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
