// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Input } from './components/Input';
import { ExpProvider } from './components/ExpContext';
import { Show } from './components/Show';

export default function App() {
   return (
      <ExpProvider>
         <SafeAreaView style={styles.container}>
            <StatusBar style="default" />
            <Text style={styles.title}>Expenses Tracker</Text>
            <Input />
            <Show />
         </SafeAreaView>
      </ExpProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f2f1ef',
      alignItems: 'center',
      paddingTop: StatusBar.currentHeight,
   },
   title: {
      fontSize: 40,
      marginBottom: 10,
   },
});
