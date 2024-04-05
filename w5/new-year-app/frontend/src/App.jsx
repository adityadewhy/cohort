import {useState} from "react";
import "./App.css";
import {CreateTodo} from "./components/CreateTodo";
import {Todos} from "./components/Todos";

function App() {
	const [todos, setTodos] = useState([]);

	fetch("http://localhost:5173/").then(async function (res) {
		const json = await res.json();
		setTodos(json.todos);
	});

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
