import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


 const Detail = () => {
    const [users, setUsers] = useState({});
    const params = useParams();

    useEffect(()=>{
fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`)
.then (response => response.json())
.then ((data) =>{
    setUsers(data)
})
    }, [])
  return (
    <div>
    <h1>Detail</h1>
    <h1>{users.name}</h1>
    <h1>{users.username}</h1>
    </div>
  )
}



export default Detail