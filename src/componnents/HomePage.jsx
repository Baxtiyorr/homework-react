// import axios from "axios"
import { useEffect, useState } from "react"
import './HomePage.css'


const HomePage = () => {



  const [users, setUsers] = useState([])
  useEffect(()=>{
    async function getUsers() {
    try{

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
setUsers(data)
    }catch(error){
      console.log(error);
    }
   

    
     
    }
    getUsers()
  },[])

  return (
    <div className="container">
      <div className="card-wrapper">
    {users.forEach(user => 
      <div className="card" key={user.id}>
        
      <h2>User ID: {user.id} </h2>
      <h2>User: {user.name}</h2>
      <h3>UserName: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      
    </div>)}
  </div>
    </div>
  
  );
};

export default HomePage
