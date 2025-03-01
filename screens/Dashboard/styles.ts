import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2C",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingTop: 40,
    backgroundColor: "#121212",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#FFF",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  popularItem: {
    width: width * 0.3,
    height: width * 0.45,
    marginRight: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    overflow: "hidden",
  },
  popularImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default styles;
