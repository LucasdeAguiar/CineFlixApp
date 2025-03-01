import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { fetchMovieVideos } from "../../utils/apiUtils";

type MovieDetailsRouteProp = RouteProp<{ params: { movie: any } }, "params">;

const MovieDetails: React.FC = () => {
  const route = useRoute<MovieDetailsRouteProp>();
  const { movie } = route.params;
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const loadMovieVideos = async () => {
      const videos = await fetchMovieVideos(movie.id);
      const trailer = videos.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    };

    loadMovieVideos();
  }, [movie.id]);

  const openTrailer = () => {
    if (trailerKey) {
      const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
      Linking.openURL(trailerUrl).catch(() =>
        alert("Não foi possível abrir o trailer.")
      );
    } else {
      alert("Trailer não disponível.");
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const openMoviePage = () => {
    const movieUrl = `https://www.themoviedb.org/movie/${movie.id}`;
    Linking.openURL(movieUrl).catch(() =>
      alert("Não foi possível abrir a página.")
    );
  };

  const streamLogos = {
    netflix: require("../../assets/logos/netflix.png"),
    disney: require("../../assets/logos/disney.png"),
    max: require("../../assets/logos/max.png"),
  };

  const availableStreams = movie.available_on
    ? movie.available_on.map((stream) => ({
        id: stream,
        logo: streamLogos[stream] || null,
      }))
    : [];

  return (
    <ScrollView style={styles.container}>
      {/* 📌 Fundo com Imagem e Efeito de Gradiente */}
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }}
        style={styles.bannerImage}
        resizeMode="cover"
        blurRadius={1.5}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,1)"]}
          style={styles.gradientOverlay}
        />
      </ImageBackground>

      <View style={styles.detailsBox}>
        {/* 📌 Título e Data de Lançamento */}
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>Lançamento: {movie.release_date}</Text>

        {/* 📌 Botões de ação */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.trailerButton} onPress={openTrailer}>
            <Ionicons name="play-circle" size={24} color="white" />
            <Text style={styles.trailerButtonText}>Assistir Trailer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          >
            <Ionicons
              name={isFavorited ? "heart" : "heart-outline"}
              size={24}
              color={isFavorited ? "red" : "white"}
            />
          </TouchableOpacity>
        </View>

        {/* 📌 Disponível em Streaming */}
        {availableStreams.length > 0 && (
          <View style={styles.streamingContainer}>
            <Text style={styles.streamingTitle}>Disponível em:</Text>
            <View style={styles.streamingLogos}>
              {availableStreams.map(
                (stream) =>
                  stream.logo && (
                    <Image
                      key={stream.id}
                      source={stream.logo}
                      style={styles.streamingLogo}
                    />
                  )
              )}
            </View>
          </View>
        )}

        {/* 📌 Descrição do filme */}
        <Text style={styles.overview}>{movie.overview}</Text>

        {/* 📌 Avaliação com Estrelas */}
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => {
            const filled = index < Math.round(movie.vote_average / 2);
            return (
              <Ionicons
                key={index}
                name={filled ? "star" : "star-outline"}
                size={20}
                color="#FFD700"
              />
            );
          })}
          <Text style={styles.rating}>
            {" "}
            {movie.vote_average.toFixed(1)} / 10
          </Text>
        </View>

        <Text style={styles.voteCount}>{movie.vote_count} avaliações</Text>

        {/* 📌 Saiba mais */}
        <TouchableOpacity style={styles.moreInfoButton} onPress={openMoviePage}>
          <Text style={styles.moreInfoText}>🔎 Saiba Mais</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
