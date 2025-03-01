import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../../routes/types";
import routes from "../../routes/routes";
import styles from "./styles";
import { loginUser } from "../../utils/services/userService";

type LoginScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "Login"
>;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const user = await loginUser(email, password);

    if (user) {
      Alert.alert("Sucesso", `Bem-vindo, ${user.name}!`);
      navigation.navigate(routes.DASHBOARD);
    } else {
      Alert.alert("Erro", "Email ou senha incorretos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(routes.REGISTER)}>
        <Text style={styles.registerLink}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
