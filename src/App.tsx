import "./App.css";
import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";

function App() {
  const fruits = ["apple", "banana", "orange", "mango", "pineapple"];
  return (
    <>
      <div className="">
        <h1>Hello World</h1>

        <PrimaryButton></PrimaryButton>
        <PrimaryButton actionType="Delete"></PrimaryButton>
        <FruitList fruits={fruits}></FruitList>
      </div>
    </>
  );
}

export default App;
