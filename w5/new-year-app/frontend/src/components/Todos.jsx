export function Todos({todos}) {
	return (
		<div>
			{todos.map( todo => {
				return (
					<div>
						<h1>{todo.title}</h1>
						<h2>{todo.desc}</h2>
						<button>
							{todo.isCompleted == true ? "completed" : "mark as completed"}
						</button>
					</div>
				);
			})}
		</div>
	);
}
