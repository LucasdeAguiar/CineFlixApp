import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { fetchSearchResults } from "../../utils/apiUtils";
import styles from "./styles";
import routes from "../../routes/routes";
import { LinearGradient } from "expo-linear-gradient";

const SearchResults: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState(
    route.params?.searchQuery || ""
  );
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchSearchResults(searchQuery, setResults);
    }
  }, [searchQuery]);

  const handlePress = (item) => {
    navigation.navigate(routes.MOVIE_DETAILS, { movie: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.resultItem}>
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.3)"]}
          style={styles.resultGradient}
        />
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.resultImage}
        />
        <View style={styles.resultDetails}>
          <Text style={styles.resultTitle}>{item.title}</Text>
          <Text style={styles.resultOverview} numberOfLines={3}>
            {item.overview || "Descrição não disponível."}
          </Text>
          <Text style={styles.resultRating}>
            ⭐ {item.vote_average?.toFixed(1)} | {item.vote_count} votos
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar filmes e séries..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <Text style={styles.title}>Resultados</Text>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SearchResults;
