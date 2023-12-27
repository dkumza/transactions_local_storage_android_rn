import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Input } from "./components/Input";
import { ExpProvider } from "./components/ExpContext";

export default function App() {
   return (
      <ExpProvider>
         <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Expenses Tracker</Text>
            <StatusBar style="default" />
            <Input />
         </SafeAreaView>
      </ExpProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      marginTop: 40,
      // justifyContent: "center",
   },
   title: {
      fontSize: 40,
      marginBottom: 10,
   },
});
