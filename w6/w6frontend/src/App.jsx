import React from 'react';
function App() {
	return(
    <div>
      <Header title = {Math.random()}/>
      <br/>
      <Header title = {Math.random()} />
      <button onClick={handleChange}> change title </button>
    </div>
  )
}

function handleChange(){
  
}

function Header (props){
  return(
    <div>
      <h1> this is first {props.title}</h1>
    </div>
  )
}

export default App;
