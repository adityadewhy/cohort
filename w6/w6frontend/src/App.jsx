import {useEffect, useState} from "react";
import axios from "axios";

function App() {
	return (
		<div>
			<Todo id={3} />
		</div>
	);
}

function Todo(props) {
	const [todos, setTodos] = useState({});

	useEffect(() => {
		axios
			.get("https://sum-server.100xdevs.com/todo?id=" + props.id)
			.then(function (res) {
				setTodos(res.data.todo);
			});
	},[]);

	return (
		<div>
			<h1>{todos.title}</h1>
			<h5>{todos.description}</h5>
		</div>
	);
}

export default App;
