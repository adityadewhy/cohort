import {useState} from "react";
import "./App.css";
import {CreateTodo} from "./components/CreateTodo";
import {Todos} from "./components/Todos";

function App() {
	return (
		<div>
			<CreateTodo></CreateTodo>
			<Todos
				todos={[
					{
						title: "asd",
						desc: "this is deesc",
						isCompleted: false,
					},
				]}
			/>
		</div>
	);
}

export default App;
