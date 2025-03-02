import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import routes from "../routes/routes";
import styles from "./styles"; 

const CustomDrawer = (props: any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* HEADER DO MENU */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/user-placeholder.png")} 
          style={styles.profileImage}
        />
        <Text style={styles.username}>Bem-vindo!</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* BOTÃO DE SAIR */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: routes.LOGIN }] })}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;