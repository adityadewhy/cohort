import React, {useState} from "react";

let counter = 4;

function App() {
	return <div>
    <CardWrapper>
      this is the child here
    </CardWrapper>
  </div>;
}

function CardWrapper({children}){
  return(
    <div style={{border:"2px solid red"}}>
      {children}
    </div>
  )
}

export default App;
