import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  ScrollView,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../../routes/types";
import styles from "./styles";
import routes from "../../routes/routes";
import {
  fetchPopularSeries,
  fetchMoviesByCategory,
} from "../../utils/apiUtils";

const Dashboard: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [animeMovies, setAnimeMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    fetchMoviesByCategory("popular", setPopularMovies);
    fetchMoviesByCategory("upcoming", setUpcomingMovies);
    fetchMoviesByCategory("top_rated", setTopRatedMovies);
    fetchMoviesByCategory("anime", setAnimeMovies);
    fetchMoviesByCategory("terror", setHorrorMovies);
    fetchMoviesByCategory("romance", setRomanceMovies);
    fetchPopularSeries(1, setPopularSeries);
  }, []);

  const handleSearchIconPress = () => {
    navigation.navigate(routes.SEARCH_RESULTS, { searchQuery: "" });
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.MOVIE_DETAILS, { movie: item })}
    >
      <View style={styles.popularItem}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.popularImage}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* Botão do Menu para abrir o Drawer */}
        <TouchableOpacity
          onPress={() => navigation.openDrawer()} // Agora funciona corretamente!
          style={styles.iconContainer}
        >
          <Image
            source={require("../../assets/images/icons/menu.png")} // Ícone do menu (adicionar na pasta assets)
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Título do App */}
        <Text style={styles.appTitle}>🎬 CineFlix</Text>

        {/* Ícone de Busca */}
        <TouchableOpacity
          onPress={handleSearchIconPress}
          style={styles.iconContainer}
        >
          <Image
            source={require("../../assets/images/icons/search.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Seções de filmes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔥 Filmes Populares</Text>
          <FlatList
            data={popularMovies}
            renderItem={renderMovieItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎥 Em Breve</Text>
          <FlatList
            data={upcomingMovies}
            renderItem={renderMovieItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Melhores Avaliados</Text>
          <FlatList
            data={topRatedMovies}
            renderItem={renderMovieItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎭 Animações</Text>
          <FlatList
            data={animeMovies}
            renderItem={renderMovieItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👻 Filmes de Terror</Text>
          <FlatList
            data={horrorMovies}
            renderItem={renderMovieItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💖 Filmes de Romance</Text>
          <FlatList
            data={romanceMovies}
            renderItem={renderMovieItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;