import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E2C",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 14,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#2E2E3A",
    color: "#FFF",
    fontSize: 16,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#E50914",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerLink: {
    color: "#FFD700",
    fontSize: 14,
    marginTop: 10,
  },
});

export default styles;
