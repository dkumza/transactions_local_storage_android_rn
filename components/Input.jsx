import { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, Text } from "react-native";

export const Input = () => {
   const [number, setNumber] = useState("");
   return (
      <SafeAreaView style={styles.container}>
         <Text>{number}</Text>
         <TextInput
            style={styles.input}
            placeholder="Enter number"
            keyboardType="numeric"
            value={number}
            onChangeText={setNumber}
         />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      width: "95%",
      display: "flex",
      alignItems: "center",
   },
   input: {
      height: 40,
      width: "60%",
      marginVertical: 10,
      borderWidth: 0.5,
      borderRadius: 6,
      padding: 10,
   },
});
