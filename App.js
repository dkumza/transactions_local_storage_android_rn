import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { Input } from "./components/Input";

export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <Input />
         <Button
            color="orange"
            title="Click"
            onPress={() => console.log("clicked button")}
         />
         <StatusBar style="default" />
      </SafeAreaView>
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
