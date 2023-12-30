import { useContext } from 'react';
import { ExpContext } from './ExpContext';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export const Show = () => {
   const { expenses } = useContext(ExpContext);

   return (
      <View style={styles.showWrap}>
         <Text style={{ marginBottom: 2.5 }}>Transactions</Text>
         {!expenses && (
            <Text style={{ marginBottom: 2.5 }}>Add new Transaction above</Text>
         )}
         {expenses &&
            expenses.map((exp) => (
               <View key={exp.id} style={styles.liItems}>
                  <Text>{exp.newName.toUpperCase()}</Text>
                  <View style={styles.liItems1}>
                     <Text
                        style={{ color: exp.newNumber > 0 ? 'green' : 'red' }}
                     >
                        € {exp.newNumber}
                     </Text>
                     {/* <Pressable
                        //  onPress={handleSubmit}
                        style={({ pressed }) => [
                           {
                              backgroundColor: pressed ? '#ffe200' : '#ffc900',
                           },
                           styles.button,
                        ]}
                     >
                        <Text style={styles.text}>Edit</Text>
                     </Pressable>
                     <Pressable
                        //  onPress={handleSubmit}
                        style={({ pressed }) => [
                           {
                              backgroundColor: pressed ? '#ff5243' : '#fb2f19',
                           },
                           styles.button,
                        ]}
                     >
                        <Text style={styles.text}>Delete</Text>
                     </Pressable> */}
                  </View>
               </View>
            ))}
      </View>
   );
};

const styles = StyleSheet.create({
   showWrap: {
      width: '75%',
      // color: 'black',
      display: 'flex',
   },

   liItems: {
      display: 'flex',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#f2f1ef',
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      marginVertical: 2.5,
      paddingHorizontal: 10,
      // paddingLeft: 10,
      paddingVertical: 10,
   },
   liItems1: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignContent: 'center',
      alignItems: 'center',
      gap: 10,
   },
   button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 3,
      paddingHorizontal: 12,
      borderRadius: 5,
      //   elevation: 3,
   },

   text: {
      //   fontSize: 16,
      lineHeight: 21,
      fontWeight: 'semibold',
      //   letterSpacing: 0.25,
      color: 'white',
   },
});
