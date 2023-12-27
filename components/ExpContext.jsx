import { createContext, useState } from "react";

export const ExpContext = createContext();
export const ExpProvider = ({ children }) => {
   const [expenses, setExpenses] = useState([]);
   const [number, setNumber] = useState("");
   return (
      <ExpContext.Provider value={(expenses, setExpenses, number, setNumber)}>
         {children}
      </ExpContext.Provider>
   );
};
