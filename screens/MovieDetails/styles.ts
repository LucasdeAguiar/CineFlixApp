import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  bannerImage: {
    width: "100%",
    height: windowWidth * 0.55,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gradientOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  detailsBox: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    backgroundColor: "#1E1E2C",
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: -30,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
  },
  releaseDate: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 12,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  trailerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E50914",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  trailerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  favoriteButton: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
  },
  streamingContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  streamingTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  streamingLogos: {
    flexDirection: "row",
    justifyContent: "center",
  },
  streamingLogo: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  overview: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFF", // Agora está realmente visível no fundo escuro!
    textAlign: "justify",
    marginTop: 10,
    marginBottom: 15,
    lineHeight: 22, // Mais espaçamento para melhor legibilidade
    paddingHorizontal: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginLeft: 10,
  },
  voteCount: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  moreInfoButton: {
    backgroundColor: "#2E2E3A",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  moreInfoText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
