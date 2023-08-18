// Library
import React, { useState } from 'react';

// Configuration Files
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// Mock Data
import DUMMY_EXPENSES from './mock/ExpenseInfo';

const App = () => {
  // Render all of expenses data in the mock file to the screen - Create and use
  // variable named 'expenses'
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
