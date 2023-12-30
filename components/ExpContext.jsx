import { createContext, useState, useEffect } from 'react';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ExpContext = createContext();
export const ExpProvider = ({ children }) => {
   const [expenses, setExpenses] = useState([]);
   const [newName, setNewName] = useState('');
   const [newNumber, setNewNumber] = useState('');

   useEffect(() => {
      const loadExpenses = async () => {
         const savedExpenses = await AsyncStorage.getItem('expenses');
         if (savedExpenses) {
            setExpenses(JSON.parse(savedExpenses));
         }
      };
      loadExpenses();
   }, []);

   const handleSubmit = async () => {
      // let finalAmount = newNumber !== "Salary" ? -Math.abs(amount) : parseInt(amount);

      if (!newName.trim() || !newNumber.trim()) {
         alert('Please enter a transaction name or amount.');
         return;
      }

      let newExp = {
         id: uuidv4(),
         newName,
         newNumber,
      };

      const updatedExpenses = [...expenses, newExp];
      await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setExpenses(updatedExpenses);
      //   console.log(expenses);
   };
   //    console.log(expenses);

   return (
      <ExpContext.Provider
         value={{
            expenses,
            setExpenses,
            newName,
            setNewName,
            newNumber,
            setNewNumber,
            handleSubmit,
         }}
      >
         {children}
      </ExpContext.Provider>
   );
};
