import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import SearchResultsScreen from "../screens/SearchResults";
import MovieDetails from "../screens/MovieDetails";
import Login from "../screens/Login";
import Register from "../screens/Register";
import CustomDrawer from "../components/CustomDrawer";
import routes from "./routes";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName={routes.LOGIN}>
    <Stack.Screen
      name={routes.LOGIN}
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.REGISTER}
      component={Register}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator initialRouteName={routes.DASHBOARD}>
    <Stack.Screen
      name={routes.DASHBOARD}
      component={Dashboard}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.SEARCH_RESULTS}
      component={SearchResultsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.MOVIE_DETAILS}
      component={MovieDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="AuthStack"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#1E1E2C" }, // Cor do menu lateral
        drawerLabelStyle: { color: "#FFF" }, // Cor do texto das opções
      }}
    >
      <Drawer.Screen name="AuthStack" component={AuthStack} options={{ drawerLabel: "Login" }} />
      <Drawer.Screen name="MainStack" component={MainStack} options={{ drawerLabel: "Dashboard" }} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppRoutes;