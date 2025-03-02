import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import SearchResultsScreen from "../screens/SearchResults";
import MovieDetails from "../screens/MovieDetails";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AppContextProvider from "../contexts";
import routes from "./routes";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackPrincipal = () => (
  <AppContextProvider>
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
  </AppContextProvider>
);

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name={routes.LOGIN} component={StackPrincipal} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
