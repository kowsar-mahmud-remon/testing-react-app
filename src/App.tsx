import "./App.css";
import PrimaryButton from "./components/PrimaryButton";

function App() {
  return (
    <>
      <div className="">
        <h1>Hello World</h1>

        <PrimaryButton></PrimaryButton>
        <PrimaryButton actionType="Delete"></PrimaryButton>
      </div>
    </>
  );
}

export default App;
