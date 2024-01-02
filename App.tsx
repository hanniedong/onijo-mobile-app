import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/features/Landing";
import Navigation from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContextProvider } from "./src/providers/AuthProvider";
import { useFonts, Poppins_500Medium, Poppins_900Black, Poppins_600SemiBold, Poppins_400Regular, Poppins_700Bold, Poppins_600Regular } from '@expo-google-fonts/poppins'

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium, Poppins_900Black, Poppins_600SemiBold, Poppins_400Regular, Poppins_700Bold, Poppins_600Regular
  });
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
          <Navigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
