
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
 
function ExternalUsers(){
  const [users, setUsers] = useState([])
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => setUsers(data))
  } , [])
  return(
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div>
      <h3>Name:{props.name}</h3>
      <h3>Email:{props.email}</h3>
    </div>
  )
}













// function Counter (){
//   const [count, setCount] = useState(0)

//   const DecreseCount = () => {
//     const newCount = count - 1
//     setCount(newCount)
//   }
//   return (
//     <div>
//       <h1>Count: {count} </h1>
//       <button onClick={DecreseCount}>Decrese</button>
//     </div>
//   )
// }



// function Counter(){
//   const [count, setCount] = useState(10)

//   const IncreseCount = () => {
//     const newCount = count + 1
//     setCount(newCount)
//   }
//   return(
//     <div>
//       <h1>Count: {count} </h1>
//       <button onClick={IncreseCount}>Increse</button>
//     </div>
//   )
// }
export default App;
