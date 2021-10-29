import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Kitchen Item',
      amount: 10000,
      date: new Date(2021, 7, 20)
    },
    {
      id: 'e2',
      title: 'Tution Fees',
      amount: 6000,
      date: new Date(2021, 8, 22)
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 12200,
      date: new Date(2021, 9, 25)
    },
    {
      id: 'e4',
      title: 'Mobile Recharge',
      amount: 1200,
      date: new Date(2021, 10, 26)
    },
    {
      id: 'e5',
      title: 'Tatasky Recharge',
      amount: 600,
      date: new Date(2021, 10, 28)
    }
  ];
  return (
    <div>
      <h2>Hi, Pradeep</h2>
      <p>Let's start the Expense App in ReactJS</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />

      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
    </div>
  );
}

export default App;
