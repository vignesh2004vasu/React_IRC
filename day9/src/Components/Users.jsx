import React, { useEffect, useState } from 'react'
import { getUser } from '../services/api'

export default function Users() {

    const [user,setUser] = useState([])

    const fetchData = async()=>{


        try{
            const res = await getUser()
            setUser(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    
    console.log(user)
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>
                    username
                </th>
                <th>
                    password
                </th>
                <th>
                    Edit
                </th>
                <th>
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {user.map((user)=>(
               
                <tr key={user.id}>
                    <td>
                        {user.username}
                    </td>
                    <td>
                        {user.password}
                    </td>
                    <td>
                        <button>Edit</button>
                    </td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
            ))

            }
        </tbody>
    </table>
    
    </>
  )
}
