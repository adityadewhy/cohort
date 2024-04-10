import React, {useState} from "react";

function App() {
  const [items, setItem] = useState([{
    id: 1,
    title : 'add first ',
    desc: ' add frist ka desc',
  }, {
    id: 2,
    title: 'second todo ',
    desc: 'second todo ka desc',
  }, {
    id: 3,
    title: "third todo",
    desc: "third todo ka desc",
  }])


  function handleClick(){
    setItem([...items], {
      id: 4,
      title : Math.random(),
      desc: Math.random(),
    })
  }

	return (
		<div>
      <button onClick={handleClick}> add new todo </button>
			{items.map( item => <Todo title= {items.title} desc= {items.desc} />)}
		</div>
	);
}

function Todo(props){
  return(
    <div>

      
      <h1>
        {props.title}
      </h1> <br/>

      <h3>
        {props.desc}
      </h3> <br/>

    </div>
  )
}

export default App;
