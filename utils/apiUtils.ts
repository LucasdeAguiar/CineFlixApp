import { API_KEY, BASE_URL } from "@env";

export const fetchMoviesByCategory = async (
  category,
  setMovies,
  pageNumber = 1
) => {
  let url = "";

  switch (category) {
    case "popular":
      url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${pageNumber}`;
      break;
    case "upcoming":
      url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=${pageNumber}`;
      break;
    case "top_rated":
      url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=${pageNumber}`;
      break;
    case "anime":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=16&page=${pageNumber}`;
      break;
    case "terror":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=27&page=${pageNumber}`;
      break;
    case "romance":
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10749&page=${pageNumber}`;
      break;
    default:
      console.error("Categoria inválida:", category);
      return;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    setMovies((prevMovies) => [...prevMovies, ...data.results]);
  } catch (error) {
    console.error(`Erro ao buscar filmes da categoria ${category}:`, error);
  }
};

export const fetchPopularSeries = async (
  pageNumber: number,
  setPopularSeries: Function
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR&page=${pageNumber}`
    );
    const data = await response.json();
    setPopularSeries((prevSeries) => [...prevSeries, ...data.results]);
  } catch (error) {
    console.error("Erro ao buscar séries populares:", error);
  }
};

export const fetchSearchResults = async (query, setSearchResults: Function) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    setSearchResults(data.results);
  } catch (error) {
    console.error("Erro ao buscar resultados:", error);
  }
};

export const fetchMovieVideos = async (movieId: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar vídeos do filme:", error);
    return [];
  }
};
