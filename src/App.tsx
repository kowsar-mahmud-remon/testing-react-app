import "./App.css";
import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";
import UsersTable from "./components/UsersTable/UsersTable";

export const users = [
  { id: 1, name: "John", age: 32 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 43 },
];

function App() {
  const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

  return (
    <>
      <div className="">
        <h1>Hello World</h1>

        <PrimaryButton></PrimaryButton>
        <PrimaryButton actionType="Delete"></PrimaryButton>
        <FruitList fruits={fruits}></FruitList>
        <UsersTable users={users}></UsersTable>
      </div>
    </>
  );
}

export default App;
