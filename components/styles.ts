import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E2C",
    },
    header: {
        height: 150,
        backgroundColor: "#FFD700",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#fff",
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1E1E2C",
        marginTop: 10,
    },
    logoutButton: {
        backgroundColor: "#E50914",
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        borderRadius: 8,
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
