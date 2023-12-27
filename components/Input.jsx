import { useContext, useState } from "react";
import {
   StyleSheet,
   SafeAreaView,
   TextInput,
   Text,
   View,
   Pressable,
} from "react-native";
import { ExpContext } from "./ExpContext";

export const Input = () => {
   const { newName, setNewName, newNumber, setNewNumber, handleSubmit } =
      useContext(ExpContext);

   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.wrapName}>Add new Transaction</Text>
         <Text>{newName}</Text>
         <Text>{newNumber}</Text>
         <View style={styles.wrapper}>
            <TextInput
               style={[styles.input, { flex: 4 }]}
               placeholder="Transaction Name"
               keyboardType="default"
               value={newName}
               onChangeText={setNewName}
            />
            <TextInput
               style={[styles.input, { flex: 1 }]}
               placeholder="Amount"
               keyboardType="numeric"
               value={newNumber}
               onChangeText={setNewNumber}
            />
         </View>
         <Pressable
            onPress={handleSubmit}
            style={({ pressed }) => [
               {
                  backgroundColor: pressed ? "#54c2ff" : "#418fff",
               },
               styles.button,
            ]}
         >
            <Text style={styles.text}>Submit</Text>
         </Pressable>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      width: "75%",
      display: "flex",
      paddingVertical: 40,
      alignItems: "center",
   },

   wrapName: {
      textAlign: "left",
      width: "100%",
      paddingBottom: 5,
   },
   wrapper: {
      display: "flex",
      //   width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      gap: 5,
   },
   input: {
      height: 40,
      //   width: "60%",
      marginBottom: 15,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
   },
   button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 4,
      elevation: 3,
   },

   text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
   },
});
