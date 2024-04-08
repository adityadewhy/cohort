import {useState} from "react";

export function CreateTodo() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const handleAddTodo = () => {
		fetch("https://localhost:3000/todo", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				desc: desc,
			}),
		}).catch((error) => {
			console.error("error addding todo:", error);
			alert("failed to add todo");
		});
	};

	return (
		<div>
			<input
				type="text"
				placeholder="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />

			<input 
			type = "text"
			placeholder="desc"
			value= {desc}
			onChange={(e) => setDesc(e.target.value)}
			/>
			<br/>

			<button onClick={handleAddTodo}>Add a Todo</button>
		</div>
	);
}
