import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react";


const Page1=() =>{
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then (response=>response.json())
.then((data)=>{
    setUsers(data)
})
}, []);

  return (
    <div>
    <h1>Page1</h1>
    <button onClick={()=>{
        navigate(-1)
    }}>back</button>
      {
        users.map(item =>{
            return <h1 key={item.id}><Link to={`/user/${item.id}`}>{item.name}</Link></h1>
        })
    }
    </div>
  );
}
export default Page1;