import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Kitchen Item',
      amount: 10000,
      date: new Date(2021, 6, 20)
    },
    {
      id: 'e2',
      title: 'Tution Fees',
      amount: 6000,
      date: new Date(2021, 7, 22)
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 12200,
      date: new Date(2021, 8, 25)
    },
    {
      id: 'e4',
      title: 'Mobile Recharge',
      amount: 1200,
      date: new Date(2021, 9, 26)
    },
    {
      id: 'e5',
      title: 'Tatasky Recharge',
      amount: 600,
      date: new Date(2021, 10, 10)
    }
  ];
  return (
    <div>
      <h2>Hi, Pradeep</h2>
      <p>Let's start the Expense App in ReactJS</p>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
