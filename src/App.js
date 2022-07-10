import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0)
  
  return (
    <>
    <div className="App">
      
       <div>{likes}</div>
       <button onClick={()=> setLikes(likes+1)}>+</button>
       <button onClick={() =>setLikes(likes-1)}>-</button>
    </div>
    </>
  );
}

export default App;
