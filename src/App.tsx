import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import { RootState } from "./redux/store";

function App() {
	const { count } = useSelector((state: RootState) => state.counter);
	return (
		<div className="App">
			<h1>Elin's awesome counter</h1>
			<p>The count is: {count}</p>
			<Button text="Increment" action="increment" />
			<Button text="Decrement" action="decrement" />
		</div>
	);
}

export default App;
