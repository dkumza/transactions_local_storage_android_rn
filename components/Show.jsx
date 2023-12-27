import { useContext } from "react";
import { ExpContext } from "./ExpContext";
import { View, Text, StyleSheet } from "react-native";

export const Show = () => {
   const { expenses } = useContext(ExpContext);
   return (
      <View style={styles.showWrap}>
         {expenses.map((exp) => (
            <View key={exp.id} style={styles.liItems}>
               <Text>{exp.newName}</Text>
               <Text>{exp.newNumber}</Text>
            </View>
         ))}
      </View>
   );
};

const styles = StyleSheet.create({
   showWrap: {
      width: "45%",
      color: "black",
      display: "flex",
   },
   liItems: {
      display: "flex",
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 2.5,
      paddingHorizontal: 15,
      paddingVertical: 5,
   },
});
