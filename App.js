import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { StripeProvider } from "@stripe/stripe-react-native";
import { ProfileContext } from "./Context";

export default function App() {
  return (
    <>
      <ProfileContext>
        <StripeProvider publishableKey="pk_test_51Oq0gLJTOlUisOZEB3eYyrXz6l47dGEAmEcuhN0vsfwppKjxyT5C5J8lk6jwjVyCSdWvrLu6ZEFE56O0gsOsgnI800T2aRs9EK">
          <StackNavigator />
          <StatusBar style="light" />
        </StripeProvider>
      </ProfileContext>
    </>
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
