import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../../routes/types";
import routes from "../../routes/routes";
import styles from "./styles";
import { registerUser } from "../../utils/services/userService";

type RegisterScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "Register"
>;

const Register: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !age || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const newUser = await registerUser(name, email, parseInt(age), password);

    if (newUser) {
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate(routes.LOGIN);
    } else {
      Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
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
        placeholder="Idade"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
        <Text style={styles.loginLink}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
